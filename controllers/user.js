const User = require('../models/user');
const {defaultParams, errorChecker} = require('./validations');

// Get list of all users.
module.exports.list = errorChecker(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    count: defaultParams.getCount(req.query.count),
    offset: defaultParams.getOffset(req.query.offset),
  };

  const post = await User.find({})
      .sort('-date')
      .skip(params.offset)
      .limit(params.count);
  const count = await User.count({});
  res.json({
    response: {count, items: post},
  });
});

// Get information for a specific user.
module.exports.info = errorChecker(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    ids: req.query.ids,
  };
  const users = (await Promise.all(params.ids.map((id) =>
    User.findOne({_id: id}))))
      .filter((user) => user)
      .map((user) => user.toAuthJSON());
  res.json({
    response: {count: users.length, items: users},
  });
});

// Handle user create on POST.
module.exports.create = errorChecker(async (req, res) => {
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
module.exports.delete = errorChecker(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    id: req.query.id,
    password: req.query.password,
  };

  const user = await User.findById(params.id);
  if (user.validPassword(params.password)) {
    await user.remove();
    res.json({response: 'success'});
  } else {
    res.json({error: 'Wrong password'});
  }
});

// Handle user update on POST.
module.exports.update = errorChecker(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    id: req.query.id,
    firstName: req.query.first_name,
    lastName: req.query.last_name,
    email: req.query.email,
    dateOfBirth: req.query.date_of_birth,
  };

  await User.findOneAndUpdate({_id: params.id}, {
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
    dateOfBirth: params.dateOfBirth,
  }, {omitUndefined: true});

  res.json({response: 'success'});
});
