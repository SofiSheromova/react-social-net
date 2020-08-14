const User = require('../models/user');
const {defaultParams, errorHandler} = require('./validations');
const createError = require('http-errors');

// Get list of all users.
module.exports.list = errorHandler(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    count: defaultParams.getCount(req.query.count),
    offset: defaultParams.getOffset(req.query.offset),
  };

  const users = (await User.find({})
      .skip(params.offset)
      .limit(params.count))
      .map((user) => user)
      .map((user) => user.toObject());
  const count = await User.count({});
  res.json({
    response: {count, items: users},
  });
});

// Get information for a specific user.
module.exports.info = errorHandler(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    ids: req.query.ids,
  };
  const users = (await Promise.all(
      params.ids.map((id) => {
        return User.findById(id);
      })))
      .filter((user) => user)
      .map((user) => user.toObject());
  res.json({
    response: {count: users.length, items: users},
  });
});

// Handle user create on POST.
module.exports.create = errorHandler(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    firstName: req.query.first_name,
    lastName: req.query.last_name,
    email: req.query.email,
    password: req.query.password,
  };

  const user = new User({
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
  });
  user.setPassword(params.password);

  await user.save();

  res.json({response: 'success'});
});

// Handle user delete on POST.
module.exports.delete = errorHandler(async (req, res, next) => {
  const params = {
    access_token: req.query.access_token,
    id: req.query.id,
    password: req.query.password,
  };

  const user = await User.findById(params.id);
  if (!user) {
    throw createError(404, 'No user found with that ID');
  }

  if (!user.validPassword(params.password)) {
    throw createError(403, 'Wrong password.');
  }

  await user.remove();
  res.json({response: 'success'});
});

// Handle user update on POST.
module.exports.update = errorHandler(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    id: req.query.id,
    firstName: req.query.first_name,
    lastName: req.query.last_name,
    email: req.query.email,
    dateOfBirth: req.query.date_of_birth,
  };

  const updatedUser = await User.findOneAndUpdate({_id: params.id}, {
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
    dateOfBirth: params.dateOfBirth,
  }, {new: true, omitUndefined: true});
  if (!updatedUser) {
    throw createError(404, 'No user found with that ID');
  }

  res.json({response: 'success'});
});
