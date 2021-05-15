const router = require('express').Router({ mergeParams: true });
const Board = require('./board.model');

const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardService.getOne(id);

  if (!board) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.json(board);
});

router.route('/').post(async (req, res) => {
  const { title, columns } = req.body;
  const board = new Board({ title, columns });
  const createdUser = await boardService.createOne(board);
  return res.status(201).json(Board.toResponse(createdUser));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const board = await boardService.getOne(id);
  const updatedUser = await boardService.updateOne(board, req.body);
  res.status(200).json(Board.toResponse(updatedUser));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const board = await boardService.getOne(id);
  if (!board) {
    return res.status(404).json({ message: 'Not Found' });
  }
  const boards = await boardService.deleteOne(id);
  return boards
    ? res.status(200).json(boards.map(Board.toResponse))
    : res.status(404).json({ message: 'Not Found' });
});
module.exports = router;
