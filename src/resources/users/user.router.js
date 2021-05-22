const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getOne(id);
  return res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const { name, login, password } = req.body;
  const user = new User({ name, login, password });
  const createdUser = await usersService.createOne(user);
  return res.status(201).json(User.toResponse(createdUser));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getOne(id);
  const updatedUser = await usersService.updateOne(user, req.body);
  res.status(200).json(User.toResponse(updatedUser));
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  await usersService.deleteOne(id);
  const users = await usersService.getAll();
  return res.status(200).json(users.map(User.toResponse));
});

module.exports = router;
