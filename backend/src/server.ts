import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db/db.js';
import authRouter from './routes/auth.js';

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

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/api/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});