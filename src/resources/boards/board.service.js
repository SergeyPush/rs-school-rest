const boardRepo = require('./board.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

const getAll = () => boardRepo.getAll();
const getOne = (id) => boardRepo.getById(id);
const createOne = (board) => {
  boardRepo.createBoard(board);
  return getOne(board.id);
};
const deleteOne = async (id) => {
  await taskRepo.deleteBoard(id);
  return boardRepo.deleteBoard(id);
};

const updateOne = (board, body) => boardRepo.updateBoard(board, body);

module.exports = { getAll, getOne, createOne, deleteOne, updateOne };
