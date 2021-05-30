import { Router, Request, Response } from 'express';
import usersService from './user.service';
import User from './user.model';

const router = Router();

router.route('/').get(async (req: Request, res: Response) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await usersService.getOne(id as string);
  return res.json(User.toResponse(user as User));
});

router.route('/').post(async (req: Request, res: Response) => {
  const { name, login, password } = req.body;
  const user = new User({ name, login, password });
  const createdUser = await usersService.createOne(user);
  return res.status(201).json(User.toResponse(createdUser as User));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getOne(id as string);
  const updatedUser = await usersService.updateOne(user as User, req.body);
  res.status(200).json(User.toResponse(updatedUser as User));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await usersService.deleteOne(id as string);
  const users = await usersService.getAll();
  return res.status(200).json(users.map(User.toResponse));
});

export default router;
