const Board = require('./board.model');

const board1 = new Board({ title: 'New board1' });
const board2 = new Board({ title: 'New board2' });
const board3 = new Board({ title: 'New board3' });
const board4 = new Board({ title: 'New board4', id: '1' });

let boards = [board1, board2, board3, board4];
/**
 * @returns {array} list of all existing boards
 */
const getAll = async () => boards;

/**
 * @param  {string} id id of searched board
 * @returns {object} object with the searched board
 */
const getById = async (id) => boards.find((board) => board.id === id);

/**
 * @param  {object} board Accepts board object
 */
const createBoard = async (board) => boards.push(board);

/**
 * @param  {string} id Id of Board to be deleted
 * @returns {array} Returns list of all boards
 */
const deleteBoard = async (id) => {
  boards = boards.filter((board) => board.id !== id);
  return boards;
};

/**
 * @param  {object} board Board that should be changed
 * @param  {object} body Data that chould be updated in board
 * @returns {object} Returns board that is changed
 */
const updateBoard = async (board, body) => {
  const idx = boards.findIndex((b) => b.id === board.id);
  boards[idx] = { ...board, ...body };
  return boards[idx];
};

module.exports = { getAll, getById, createBoard, deleteBoard, updateBoard };
