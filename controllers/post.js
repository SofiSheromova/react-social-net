const Post = require('../models/post');
const {defaultParams, errorChecker} = require('./validations');

// Get list of all posts.
module.exports.list = errorChecker(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    count: defaultParams.getCount(req.query.count),
    offset: defaultParams.getOffset(req.query.offset),
  };

  const post = await Post.find({})
      .sort('-date')
      .skip(params.offset)
      .limit(params.count);
  const count = await Post.count({});
  res.json({
    response: {count, items: post},
  });
});

// Get information for a specific post.
module.exports.info = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Post detail: ' + req.query.access_token);
  console.log(req.query);
});

// Handle post create on POST.
module.exports.create = errorChecker(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    owner_id: req.query.owner_id,
    title: req.query.title,
    text: req.query.text,
    attachments: req.query.attachments,
  };

  if (!params.text && !params.attachments) {
    console.log('error');
    // sendError(res, {
    //   'msg': 'At least one of the values must be defined',
    //   'param': 'text,attachments',
    //   'location': 'query',
    // });
  }

  // TODO: attachments check

  const post = new Post({
    title: params.title,
    text: params.text,
    owner_id: params.owner_id,
    photos: params.attachments,
  });

  await post.save();
  res.json({response: 'success'});
});

// Handle post delete on POST.
module.exports.delete = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Post delete POST');
  console.log(req.query);
});

// Handle post update on POST.
module.exports.update = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Post update POST');
  console.log(req.query);
});
