const User = require('../models/user.model');

exports.create = (req, res) => {
  if (!req.body.username) {
    return res.status(400).send({
      error: 'Username Required',
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      error: 'Password Required',
    });
  }
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  user.save().then(data => res.send(data)).catch(error => res.send({
    error: error || 'error on create user',
  }));
};

exports.findAll = (req, res) => {
  User.find().then(Users => res.send(Users)).catch((error) => {
    res.status(500).send({
      error: error || 'something wrong',
    });
  });
};
