import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db/db.js';
import authRouter from './routes/auth.js';
import auth from './middleware/authMiddleware.js'

dotenv.config();

const app = express(); // Create the backend application

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);


app.get("/", (req, res) => {
    res.send("Hello from kaizen Backend!");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Kaizen backend is running",
  });
});

app.get("/api/me", auth, async (req, res)  =>{
  const userId = res.locals.userId;
  const result = await pool.query(
    `SELECT id, name, email, level, xp, streak, created_at
     FROM users 
     WHERE id = $1`,
     [userId]
  );

  res.json(result.rows[0])
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/api/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});