const taskRepo = require('./task.memory.repository');

const getAll = (boardId) => taskRepo.getAll(boardId);
const getOne = (boardId, taskId) => taskRepo.getById(boardId, taskId);

const createOne = (task) => {
  taskRepo.createTask(task);
  return getOne(task.boardId, task.id);
};
const deleteOne = (boardId, taskId) => taskRepo.deleteTask(boardId, taskId);

const updateOne = (task, body) => taskRepo.updateTask(task, body);

module.exports = { getAll, getOne, createOne, deleteOne, updateOne };
