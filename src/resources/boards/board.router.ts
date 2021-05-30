import { Router, Request, Response } from 'express';

import Board from './board.model';
import boardService from './board.service';

const router = Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards = await boardService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardService.getOne(id as string);

  if (!board) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.json(board);
});

router.route('/').post(async (req, res) => {
  const { title, columns } = req.body;
  const board = new Board({ title, columns });
  const createdBoard = await boardService.createOne(board);
  return res.status(201).json(Board.toResponse(createdBoard as Board));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const board = await boardService.getOne(id as string);
  const updatedBoard = await boardService.updateOne(board as Board, req.body);
  res.status(200).json(Board.toResponse(updatedBoard as Board));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const board = await boardService.getOne(id as string);
  if (!board) {
    return res.status(404).json({ message: 'Not Found' });
  }
  const boards = await boardService.deleteOne(id as string);
  return boards
    ? res.status(200).json(boards.map(Board.toResponse))
    : res.status(404).json({ message: 'Not Found' });
});
export default router;
