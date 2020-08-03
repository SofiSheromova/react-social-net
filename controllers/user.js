const User = require('../models/user');
const {defaultParams, errorChecker} = require('./validations');

// Get list of all users.
exports.list = errorChecker(async (req, res) => {
  const errors = checkErrors(req);
  if (errors) {
    return sendError(res, errors);
  }

  const params = {
    access_token: req.query.access_token,
    count: defaultParams.getCount(req.query.count),
    offset: defaultParams.getOffset(req.query.offset),
  };

  console.log(params);

  const post = await User.find({})
      // .sort('-date')
      .skip(params.offset)
      .limit(params.count);
  const count = await User.count({});
  res.json({
    response: {count, items: post},
  });
});

// Get information for a specific user.
exports.info = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
});

// Handle user create on POST.
exports.create = errorChecker(async (req, res) => {
  const user = new User({first_name: 'Sofi', second_name: 'Sheromova'});
  await user.save();
  res.json({response: 'success'});
  // res.send('NOT IMPLEMENTED: User create POST');
});

// Handle user delete on POST.
exports.delete = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: User delete POST');
});

// Handle user update on POST.
exports.update = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: User update POST');
});
