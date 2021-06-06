import { Router } from 'express';
import Task from './task.model';
import taskService from './task.service';

const router = Router({ mergeParams: true });

router.route('/:boardId/tasks').get(async (req, res) => {
  const { boardId } = req.params;
  if (boardId) {
    const tasks = await taskService.getAll(boardId);
    res.json(tasks.map(Task.toResponse));
  }
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const { boardId, taskId } = req.params as { boardId: string; taskId: string };
  const task = await taskService.getOne(boardId, taskId);

  if (!task) {
    return res.status(404).json('Not Found');
  }
  return res.json(Task.toResponse(task));
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const { boardId } = req.params;

  const { title, order, description, userId, columnId } = req.body;
  const task = new Task({
    title,
    order,
    description,
    userId,
    boardId,
    columnId,
  });

  const createdTask = await taskService.createOne(task);
  return res.status(201).json(Task.toResponse(createdTask as Task));
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const { boardId, taskId } = req.params as { boardId: string; taskId: string };
  const { body } = req;
  const task = await taskService.getOne(boardId, taskId);
  const updatedTask = await taskService.updateOne(task as Task, body);
  res.status(200).json(Task.toResponse(updatedTask as Task));
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const { boardId, taskId } = req.params;
  const tasks = await taskService.deleteOne(
    boardId as string,
    taskId as string
  );
  if (!tasks) {
    return res.status(404);
  }
  return res.status(200).json(tasks.map(Task.toResponse));
});

export default router;
