const boardRepo = require('./board.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

/**
 * @returns {array} Returns array of boards
 */
const getAll = () => boardRepo.getAll();

/**
 * @param  {string} id Of requested board
 * @returns  {object} Object
 */
const getOne = (id) => boardRepo.getById(id);

/**
 * @param  {object} board Board object
 * @returns {object} Created board
 */
const createOne = (board) => {
  boardRepo.createBoard(board);
  return getOne(board.id);
};

/**
 * @param  {string} id
 * @returns {object} Returns object of deleted board
 */
const deleteOne = async (id) => {
  await taskRepo.deleteBoard(id);
  return boardRepo.deleteBoard(id);
};

const updateOne = (board, body) => boardRepo.updateBoard(board, body);

module.exports = { getAll, getOne, createOne, deleteOne, updateOne };
