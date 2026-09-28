import express from "express";
import pool from "../db/db.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const userId = res.locals.userId;

  const result = await pool.query(
    `
    SELECT
      id,
      title,
      message,
      open_at,
      notified,
      created_at
    FROM letters
    WHERE user_id = $1
    ORDER BY created_at DESC
    `,
    [userId]
  );

  res.json(result.rows);
});

router.post("/", auth, async (req, res) => {
  const userId = res.locals.userId;
  const { title, message, openAt } = req.body;

  if (!title?.trim() || !message?.trim()) {
    return res.status(400).json({
      message: "Title and message are required",
    });
  }

  if (message.length > 500) {
    return res.status(400).json({
      message: "Message must be 500 characters or fewer",
    });
  }

  const result = await pool.query(
    `
    INSERT INTO letters (
      user_id,
      title,
      message,
      open_at
    )
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [
      userId,
      title.trim(),
      message.trim(),
      openAt || null,
    ]
  );

  res.status(201).json(result.rows[0]);
});

export default router;