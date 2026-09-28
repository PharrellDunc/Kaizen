import express from "express";
import bcrypt from "bcrypt";
import pool from "../db/db.js";
import jwt from "jsonwebtoken";
import auth from "../middleware/authMiddleware.js";
import { sendWelcomeEmail } from "../services/mail.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await pool.query(
    `SELECT id FROM users WHERE email = $1`,
    [email]
  );

  if (existingUser.rows.length > 0) {
    return res.status(409).json({
      message: "An account with this email already exists",
    });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `
    INSERT INTO users (name, email, password_hash)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, level, xp, streak, created_at
    `,
    [name, email, passwordHash]
  );

  const newUser = result.rows[0];

  try {
    await sendWelcomeEmail(
      newUser.email,
      newUser.name
    );
  } catch (error) {
    console.error("Welcome email failed:", error);
  }

  res.status(201).json(newUser);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );

  const user = result.rows[0];

  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password_hash
  );

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }

  const streakResult = await pool.query(
    `
    UPDATE users
    SET
      streak = CASE
        WHEN last_login_date = CURRENT_DATE
          THEN streak
        WHEN last_login_date = CURRENT_DATE - 1
          THEN streak + 1
        ELSE 1
      END,
      last_login_date = CURRENT_DATE
    WHERE id = $1
    RETURNING
      id,
      name,
      email,
      level,
      xp,
      streak,
      created_at,
      last_login_date
    `,
    [user.id]
  );

  const updatedUser = streakResult.rows[0];

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET!,
    { expiresIn: "8h" }
  );

  res.json({
    message: "Login successful",
    token,
    user: updatedUser,
  });
});

router.delete("/account", auth, async (req, res) => {
  const userId = res.locals.userId;

  await pool.query(
    `DELETE FROM users WHERE id = $1`,
    [userId]
  );

  res.status(204).send();
});

export default router;