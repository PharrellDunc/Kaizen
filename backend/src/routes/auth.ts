import express from 'express';
import bcrypt from 'bcrypt';
import pool from '../db/db.js';
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async(req,res) => {
const { name, email, password} = req.body;

const passwordHash = await bcrypt.hash(password, 10);

const result = await pool.query(
`INSERT INTO users (name, email, password_hash)
 VALUES ($1, $2, $3)
 RETURNING id, name, email, level, xp, streak, created_at`,
 [name, email, passwordHash]
);

res.status(201).json(result.rows[0]);
});

router.post("/login", async(req,res) => {
    const { email, password } = req.body;

    const result = await pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
    );

    const user = result.rows[0];

    if(!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password_hash
    );

    if(!isMatch) {
        return res.status(401).json({
            message:"invalid email or password"
        });
    }

    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
        );

    res.json({
        message: "Login successful",
        token,
        user: {
            id: user.id,
            name: user.name, 
            email: user.email,
            level: user.level,
            xp: user.xp,
            streak: user.streak,
        },
    });
});

export default router;