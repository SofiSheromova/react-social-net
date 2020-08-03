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
};
