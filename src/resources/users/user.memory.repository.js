const User = require('./user.model');

const user1 = new User({
  name: 'John',
  login: 'johny1',
  password: 'youknownothing',
});
const user2 = new User({
  name: 'Aria',
  login: 'astark1',
  password: 'valarmorgulis',
});
const user3 = new User({
  name: 'Hodor',
  login: 'howdy',
  password: 'holdthedoor',
});
const user4 = new User({
  name: 'Daeneris',
  login: 'khalise',
  password: 'motherofdragons',
  id: '1',
});

const users = [user1, user2, user3, user4];
/**
 * @returns {array} List of all users
 */
const getAll = async () => users;

/**
 * @param  {string} id Id of a user
 * @returns {object} Object with a particular user
 */
const getById = async (id) => users.find((user) => user.id === id);

/**
 * @param  {object} user Takes User object
 * @returns {undefined} Function adds user to users list
 */
const createUser = async (user) => users.push(user);

/**
 * @param  {object} user User object
 * @param  {object} body Data that should be updated in user object
 */
const updateUser = async (user, body) => {
  const idx = users.findIndex((item) => item.id === user.id);
  users[idx] = { ...user, ...body };
};

/**
 * @param  {string} id Id of user to be deleted
 * @returns {object} Returns deleted user
 */
const deleteUser = async (id) => users.filter((user) => user.id !== id);

module.exports = { getAll, getById, createUser, deleteUser, updateUser };
