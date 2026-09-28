import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db/db.js';
import authRouter from './routes/auth.js';
import auth from './middleware/authMiddleware.js'
import habitsRouter from "./routes/habits.js";
import lettersRouter from "./routes/letters.js";
import { sendLetterReadyEmail } from "./services/mail.js";

dotenv.config();

const app = express(); // Create the backend application

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/habits", habitsRouter);
app.use("/api/letters", lettersRouter);


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
    `SELECT id, name, email, level, xp, streak, created_at, last_login_date
     FROM users 
     WHERE id = $1`,
     [userId]
  );

  res.json(result.rows[0])
});

app.get("/api/leaderboard", async (req, res) => {
  const result = await pool.query(
    `
    SELECT
      id,
      name,
      level,
      xp,
      streak
    FROM users
    ORDER BY streak DESC, xp DESC
    LIMIT 20
    `
  );

  res.json(result.rows);
});

async function checkReadyLetters() {
  const result = await pool.query(
    `
    SELECT
      letters.id,
      letters.title,
      users.name,
      users.email
    FROM letters
    JOIN users
      ON letters.user_id = users.id
    WHERE
      letters.open_at IS NOT NULL
      AND letters.open_at <= NOW()
      AND letters.notified = FALSE
    `
  );

  for (const letter of result.rows) {
    try {
      await sendLetterReadyEmail(
        letter.email,
        letter.name,
        letter.title
      );

      await pool.query(
        `
        UPDATE letters
        SET notified = TRUE
        WHERE id = $1
        `,
        [letter.id]
      );

      console.log(
        `Letter notification sent to ${letter.email}`
      );
    } catch (error) {
      console.error(
        "Letter notification failed:",
        error
      );
    }
  }
}
setInterval(checkReadyLetters, 60 * 1000);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/api/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});