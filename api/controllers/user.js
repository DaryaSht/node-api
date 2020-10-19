// const generatePassword = require('password-generator');
const { User } = require('../../database/models/user/user');
const mongoose = require('mongoose');

const userController = {};

userController.addUser = function (userData) {
  const newUser = new User(userData);
  let userId;
  return newUser
    .save()
    .then((user) => {
      userId = user._id;
    })
    .then(() => {
      const columnId = new mongoose.Types.ObjectId();
    });
};

module.exports = userController;