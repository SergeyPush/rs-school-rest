import usersRepo from './user.memory.repository';
import taskRepo from '../tasks/task.memory.repository';
import User from './user.model';

/**
 * @returns {array} Returns list of Users
 */
const getAll = () => usersRepo.getAll();

/**
 * @param  {string} id Id of User
 * @returns {object} Returns object of User
 */
const getOne = (id: string) => usersRepo.getById(id);

/**
 * @param  {string} user Id of User
 * @returns {object} Returns object of created User
 */
const createOne = (user: User) => {
  usersRepo.createUser(user);
  return getOne(user.id as string);
};

/**
 * @param  {string} id Id of user to be deleted
 * @returns {array} Returns list of all users
 */
const deleteOne = (id: string) => {
  taskRepo.deleteUser(id);
  return usersRepo.deleteUser(id);
};

/**
 * @param  {object} user User object
 * @param  {object} body Object to update the user
 * @returns {object} Reutrns updated user
 */
const updateOne = (
  user: User,
  body: { name?: string; login?: string; password?: string }
) => {
  usersRepo.updateUser(user, body);
  return getOne(user.id as string);
};

export default { getAll, getOne, createOne, deleteOne, updateOne };
