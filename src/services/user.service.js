const userDao = require('../models/user.dao');

const signup = async (name, email, profileImage, password) => {
  return await userDao.signup(name, email, profileImage, password);
};

module.exports = { signup };
