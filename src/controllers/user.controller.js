const userService = require('../services/user.service');

const signup = async (req, res, next) => {
  const { name, email, profileImage, password } = req.body;
  console.log(name, email, profileImage, password);

  await userService.signup(name, email, profileImage, password);

  res.status(201).json({ message: 'userCreated' });
};

module.exports = { signup };
