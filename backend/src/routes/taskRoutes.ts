import express from "express";
import { createTask, getTasks, markTaskDone } from "../controllers/taskController";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id/done", markTaskDone);

export default router;
