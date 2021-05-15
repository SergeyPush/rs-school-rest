const Board = require('./board.model');

const board1 = new Board({ title: 'New board1' });
const board2 = new Board({ title: 'New board2' });
const board3 = new Board({ title: 'New board3' });
const board4 = new Board({ title: 'New board4', id: '1' });

let boards = [board1, board2, board3, board4];

const getAll = async () => boards;
const getById = async (id) => boards.find((board) => board.id === id);
const createBoard = async (board) => boards.push(board);
const deleteBoard = async (id) => {
  boards = boards.filter((board) => board.id !== id);
  return boards;
};

const updateBoard = async (board, body) => {
  const idx = boards.findIndex((b) => b.id === board.id);
  boards[idx] = { ...board, ...body };
  return boards[idx];
};

module.exports = { getAll, getById, createBoard, deleteBoard, updateBoard };
