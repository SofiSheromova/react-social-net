const postController = require('../../controllers/post');
const {validationChains} = require('../../controllers/validations');

module.exports = (app) => {
  // GET request for list of all Post items.
  app.get('/api/wall.get', [
    validationChains.access_token(),
    validationChains.count(),
    validationChains.offset(),
  ], postController.list);

  // GET request for one Post.
  app.get('/api/wall.getById', [
    validationChains.access_token(),
    validationChains.ids(),
  ], postController.info);

  // POST request for creating Post.
  app.post('/api/wall.create', [
    validationChains.access_token(),
    validationChains.id('owner_id'),
    validationChains.text(),
    validationChains.title(),
    validationChains.attachments(),
  ], postController.create);

  // POST request to delete Post.
  app.post('/api/wall.delete', [
    validationChains.access_token(),
    validationChains.id('post_id'),
    validationChains.id('owner_id'),
  ], postController.delete);

  // POST request to update Post.
  app.post('/api/wall.update', [
    validationChains.access_token(),
    validationChains.id('owner_id'),
    validationChains.id('post_id'),
    validationChains.text(),
    validationChains.attachments(),
  ], postController.update);
};
