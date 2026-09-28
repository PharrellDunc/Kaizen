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

router.patch("/:id", auth, async (req, res) => {
  const userId = res.locals.userId;
  const habitId = req.params.id;
  const { completed } = req.body;

  const result = await pool.query(
    `
    UPDATE habits
    SET completed = $1
    WHERE id = $2 AND user_id = $3
    RETURNING *
    `,
    [completed, habitId, userId]
  );

  res.json(result.rows[0]);
});

router.delete("/:id", auth, async (req, res) => {
  const userId = res.locals.userId;
  const habitId = req.params.id;

  await pool.query(
    `
    DELETE FROM habits
    WHERE id = $1 AND user_id = $2
    `,
    [habitId, userId]
  );

  res.status(204).send();
});

export default router;