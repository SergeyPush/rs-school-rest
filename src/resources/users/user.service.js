const usersRepo = require('./user.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

const getAll = () => usersRepo.getAll();
const getOne = (id) => usersRepo.getById(id);
const createOne = (user) => {
  usersRepo.createUser(user);
  return getOne(user.id);
};
const deleteOne = (id) => {
  taskRepo.deleteUser(id);
  return usersRepo.deleteUser(id);
};
const updateOne = (user, body) => {
  usersRepo.updateUser(user, body);
  return getOne(user.id);
};

module.exports = { getAll, getOne, createOne, deleteOne, updateOne };
