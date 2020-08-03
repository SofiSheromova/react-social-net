const photoController = require('../../controllers/photo');

module.exports = (app) => {
  // GET request for list of all Photo items.
  app.get('/api/photos.get', photoController.list);

  // GET request for one Photo.
  app.get('/api/photos.getById', photoController.info);

  // POST request for creating Photo.
  app.post('/api/photos.create', photoController.create);

  // POST request to delete Photo.
  app.post('/api/photos.delete', photoController.delete);

  // POST request to update Photo.
  app.post('/api/photos.update', photoController.update);
};
