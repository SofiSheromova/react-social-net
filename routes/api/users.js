const userController = require('../../controllers/user');

module.exports = (app) => {
  // GET request for list of all User items.
  app.get('/api/users.get', userController.list);

  // GET request for one User.
  app.get('/api/users.getById', userController.info);

  // POST request for creating User.
  app.post('/api/users.create', userController.create);

  // POST request to delete User.
  app.post('/api/users.delete', userController.delete);

  // POST request to update User.
  app.post('/api/users.update', userController.update);
};
