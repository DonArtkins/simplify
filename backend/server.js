const express = require("express");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");
const cors = require("cors");
const { body, validationResult, param } = require("express-validator");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

// --- Task API Endpoints ---

// Get all tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        id: "desc",
      },
    });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Create a task
app.post(
  "/api/tasks",
  [
    body("title")
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ max: 255 })
      .withMessage("Title must be less than 255 characters"),
    body("description")
      .optional()
      .isString()
      .withMessage("Description must be a string"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { title, description } = req.body;
      const task = await prisma.task.create({
        data: {
          title,
          description,
        },
      });
      res.status(201).json(task);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
);

// Get a single task
app.get(
  "/api/tasks/:id",
  [param("id").isInt().withMessage("ID must be an integer")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { id } = req.params;
      const task = await prisma.task.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (!task) {
        return res.status(404).send("Task not found");
      }
      res.json(task);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
);

// Update a task
app.put(
  "/api/tasks/:id",
  [
    param("id").isInt().withMessage("ID must be an integer"),
    body("title")
      .optional()
      .isString()
      .withMessage("Title must be a string")
      .isLength({ max: 255 })
      .withMessage("Title must be less than 255 characters"),
    body("description")
      .optional()
      .isString()
      .withMessage("Description must be a string"),
    body("completed")
      .optional()
      .isBoolean()
      .withMessage("Completed must be a boolean"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { id } = req.params;
      const { title, description, completed } = req.body;

      const task = await prisma.task.update({
        where: {
          id: parseInt(id),
        },
        data: {
          title,
          description,
          completed,
        },
      });

      res.json(task);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
);

// Delete a task
app.delete(
  "/api/tasks/:id",
  [param("id").isInt().withMessage("ID must be an integer")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { id } = req.params;
      const task = await prisma.task.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.json({ message: "Task deleted", task });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
