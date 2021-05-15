const Task = require('./task.model');

const task1 = new Task({
  title: 'First task',
  order: '1',
  description: 'Do something',
  boardId: '1',
  userId: '1',
  columnId: '1',
});
const task2 = new Task({
  title: 'Second task',
  order: '2',
  description: 'Do something else',
  boardId: '2',
  userId: '1',
  columnId: '1',
});
const task3 = new Task({
  title: 'Third task',
  order: '3',
  description: 'Do other thing',
  boardId: '1',
  userId: '1',
  columnId: '1',
  id: '1',
});
let tasks = [task1, task2, task3];

const getAll = async (boardId) =>
  tasks.filter((task) => task.boardId === boardId);

const getById = async (boardId, taskId) =>
  tasks
    .filter((task) => task.boardId === boardId)
    .find((task) => task.id === taskId);

const createTask = async (task) => tasks.push(task);

const deleteTask = async (boardId, taskId) => {
  tasks = tasks.filter((task) => task.id !== taskId);
  return tasks;
};

const updateTask = async (task, body) => {
  const idx = tasks.findIndex((t) => t.id === task.id);
  tasks[idx] = { ...task, ...body };
  return tasks[idx];
};

const deleteUser = async (userId) => {
  tasks = tasks.map((task) =>
    task.userId === userId ? { ...task, userId: null } : { ...task }
  );
};

const deleteBoard = async (boardId) => {
  tasks = tasks.filter((task) => task.boardId !== boardId);
};
module.exports = {
  getAll,
  getById,
  createTask,
  deleteTask,
  updateTask,
  deleteUser,
  deleteBoard,
};
