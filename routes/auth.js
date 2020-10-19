const route = require('express').Router();
const passport = require('passport');
const userController = require('../api/controllers/user');
const response = require('./response');

route.post('/register', (req, res) => {
    userController.addUser({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
    })
      .then(() => response(res, ''))
      .catch((err) => {
        res.status(400).json(err);
      });
  });