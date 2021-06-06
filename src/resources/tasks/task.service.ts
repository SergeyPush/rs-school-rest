import taskRepo from './task.memory.repository';
import Task, { TaskType } from './task.model';

/**
 * @param  {string} boardId Id of requested board
 * @returns {array} List of all boards
 */
const getAll = (boardId: string) => taskRepo.getAll(boardId);

/**
 * @param  {string} boardId Id of requested Board
 * @param  {string} taskId Id of requested Task
 * @returns  {object} Returns objet of Task
 */
const getOne = (boardId: string, taskId: string) =>
  taskRepo.getById(boardId, taskId);

/**
 * @param  {object} task Task object
 * @returns {object} Object of created Task
 */
const createOne = (task: Task) => {
  taskRepo.createTask(task);
  return getOne(task.boardId, task.id);
};

/**
 * @param  {string} boardId Id of Board
 * @param  {string} taskId Id of Task
 * @returns {array} list of all Tasks of requested Board
 */
const deleteOne = (boardId: string, taskId: string) =>
  taskRepo.deleteTask(boardId, taskId);

/**
 * @param  {string} task Id of Task to update
 * @param  {object} body Object with data to update task
 * @returns {object} Returns updated task
 */
const updateOne = (task: Task, body: TaskType) =>
  taskRepo.updateTask(task, body);

export default { getAll, getOne, createOne, deleteOne, updateOne };
