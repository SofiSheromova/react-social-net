const Post = require('../models/post');
const createError = require('http-errors');
const {
  defaultParams,
  errorHandler,
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
module.exports.info = errorHandler(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    ids: req.query.ids,
  };
  const posts = (await Promise.all(
      params.ids.map((id) => {
        return Post.findById(id);
      })))
      .filter((post) => post)
      .map((post) => post.toObject());
  res.json({
    response: {count: posts.length, items: posts},
  });
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
module.exports.delete = errorHandler(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    id: req.query.id,
  };

  const post = await Post.findById(params.id);
  if (!post) {
    throw createError(404, 'No post found with that ID');
  }

  await post.remove();
  res.json({response: 'success'});
});

// Handle post update on POST.
module.exports.update = errorHandler(async (req, res) => {
  const params = {
    access_token: req.query.access_token,
    id: req.query.id,
    text: req.query.text,
    attachments: req.query.attachments,
  };

  const updatedPost = await Post.findOneAndUpdate({_id: params.id}, {
    access_token: params.access_token,
    text: params.text,
    attachments: params.attachments,
  }, {new: true, omitUndefined: true});
  if (!updatedPost) {
    throw createError(404, 'No post found with that ID');
  }

  res.json({response: 'success'});
});
