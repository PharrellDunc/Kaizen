import express from "express";
import pool from "../db/db.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const userId = res.locals.userId;

  const result = await pool.query(
    `
    SELECT *
    FROM habits
    WHERE user_id = $1
    `,
    [userId]
  );

  res.json(result.rows);
});

router.post("/", auth, async (req, res) => {
  const userId = res.locals.userId;
  const { name } = req.body;

  const result = await pool.query(
    `
    INSERT INTO habits (user_id, name)
    VALUES ($1, $2)
    RETURNING *
    `,
    [userId, name]
  );

  res.status(201).json(result.rows[0]);
});

export default router;