import Task, { TaskType } from './task.model';

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
/**
 * @param  {string} boardId Id of a board
 * @returns {array} Return array of all tasks of particular board
 */
const getAll = async (boardId: string) =>
  tasks.filter((task) => task.boardId === boardId);

/**
 * @param  {string} boardId Id of a board
 * @param  {string} taskId Id of a task
 * @returns {object} Returns single task object
 */
const getById = async (boardId: string, taskId: string) =>
  tasks
    .filter((task) => task.boardId === boardId)
    .find((task) => task.id === taskId);
/**
 * @param  {object} task Task that is going to be added
 */
const createTask = async (task: Task) => tasks.push(task);

/**
 * @param  {string} boardId Id of a board
 * @param  {string} taskId Id of a task to be deleted
 * @returns {array} List of all tasks
 */
const deleteTask = async (_boardId: string, taskId: string) => {
  tasks = tasks.filter((task) => task.id !== taskId);
  return tasks;
};
/**
 * @param  {object} task Task that is going to be changed
 * @param  {object} body Object with data that should be updated
 * @returns {object} Returns changed task
 */
const updateTask = async (task: Task, body: TaskType) => {
  const idx = tasks.findIndex((t) => t.id === task.id);
  tasks[idx] = { ...task, ...body };
  return tasks[idx];
};

/**
 * @param  {string} userId Id of user that is deleted
 */
const deleteUser = async (userId: string) => {
  tasks = tasks.map((task) =>
    task.userId === userId ? { ...task, userId: null } : { ...task }
  );
};
/**
 * @param  {string} boardId Id of board that is deleted
 */
const deleteBoard = async (boardId: string) => {
  tasks = tasks.filter((task) => task.boardId !== boardId);
};
export default {
  getAll,
  getById,
  createTask,
  deleteTask,
  updateTask,
  deleteUser,
  deleteBoard,
};
