const Post = require('../models/post');
const {
  defaultParams,
  errorHandler,
  errorFormatter,
  sendError,
} = require('./validations');

// Get list of all posts.
module.exports.list = errorHandler(async (req, res) => {
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
module.exports.info = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Post detail: ' + req.query.access_token);
  console.log(req.query);
});

// Handle post create on POST.
module.exports.create = errorHandler(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    ownerId: req.query.owner_id,
    title: req.query.title,
    text: req.query.text,
    attachments: req.query.attachments,
  };

  if (!params.text && !params.attachments) {
    return sendError(res, errorFormatter({
      location: 'query',
      param: 'text|attachments',
      msg: 'At least one of the values must be defined',
    }));
  }

  // TODO: attachments check

  const post = new Post({
    title: params.title,
    text: params.text,
    ownerId: params.ownerId,
    photos: params.attachments,
  });

  await post.save();
  res.json({response: 'success'});
});

// Handle post delete on POST.
module.exports.delete = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Post delete POST');
  console.log(req.query);
});

// Handle post update on POST.
module.exports.update = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Post update POST');
  console.log(req.query);
});
