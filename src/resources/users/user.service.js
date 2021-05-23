const usersRepo = require('./user.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');
/**
 * @returns {array} Returns list of Users
 */
const getAll = () => usersRepo.getAll();

/**
 * @param  {string} id Id of User
 * @returns {object} Returns object of User
 */
const getOne = (id) => usersRepo.getById(id);

/**
 * @param  {string} user Id of User
 * @returns {object} Returns object of created User
 */
const createOne = (user) => {
  usersRepo.createUser(user);
  return getOne(user.id);
};

/**
 * @param  {string} id Id of user to be deleted
 * @returns {array} Returns list of all users
 */
const deleteOne = (id) => {
  taskRepo.deleteUser(id);
  return usersRepo.deleteUser(id);
};

/**
 * @param  {object} user User object
 * @param  {object} body Object to update the user
 * @returns {object} Reutrns updated user
 */
const updateOne = (user, body) => {
  usersRepo.updateUser(user, body);
  return getOne(user.id);
};

module.exports = { getAll, getOne, createOne, deleteOne, updateOne };
