import boardRepo from './board.memory.repository';
import taskRepo from '../tasks/task.memory.repository';
import Board, { BoardType } from './board.model';

/**
 * @returns {array} Returns array of boards
 */
const getAll = () => boardRepo.getAll();

/**
 * @param  {string} id Of requested board
 * @returns  {object} Object
 */
const getOne = (id: string) => boardRepo.getById(id);

/**
 * @param  {object} board Board object
 * @returns {object} Created board
 */
const createOne = (board: Board) => {
  boardRepo.createBoard(board);
  return getOne(board.id as string);
};

/**
 * @param  {string} id
 * @returns {object} Returns object of deleted board
 */
const deleteOne = async (id: string) => {
  await taskRepo.deleteBoard(id);
  return boardRepo.deleteBoard(id);
};

const updateOne = (board: Board, body: BoardType) =>
  boardRepo.updateBoard(board, body);

export default { getAll, getOne, createOne, deleteOne, updateOne };
