const userController = require('../../controllers/user');
const {validationChains} = require('../../controllers/validations');

module.exports = (app) => {
  // GET request for list of all User items.
  app.get('/api/users.get', [
    validationChains.access_token(),
  ], userController.list);

  // GET request for one User.
  app.get('/api/users.getById', [
    validationChains.access_token(),
    validationChains.ids(),
  ], userController.info);

  // POST request for creating User.
  app.post('/api/users.create', [
    validationChains.access_token(),
    validationChains.firstName(),
    validationChains.lastName(),
    validationChains.email(),
    validationChains.password(),
  ], userController.create);

  // POST request to delete User.
  app.post('/api/users.delete', [
    validationChains.access_token(),
    validationChains.id(),
    validationChains.password(),
  ], userController.delete);

  // POST request to update User.
  app.post('/api/users.update', [
    validationChains.access_token(),
    validationChains.id(),
    validationChains.firstName().optional(),
    validationChains.lastName().optional(),
    validationChains.date('date_of_birth').optional(),
    validationChains.email().optional(),
  ], userController.update);
};
