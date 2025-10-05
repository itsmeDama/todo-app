import { Request, Response } from "express";
import { prisma } from "../prisma";

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await prisma.task.findMany({
    where: { completed: false },
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description required" });
  }
  const task = await prisma.task.create({ data: { title, description } });
  res.status(201).json(task);
};

export const markTaskDone = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const task = await prisma.task.update({
    where: { id },
    data: { completed: true },
  });
  res.json(task);
};
