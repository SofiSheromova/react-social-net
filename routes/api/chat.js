const chatController = require('../../controllers/chat');

module.exports = (app) => {
  // GET request for list of all Photo items.
  app.get('/api/chats.get', chatController.list);

  // GET request for one Photo.
  app.get('/api/chats.getById', chatController.info);

  // POST request for creating Photo.
  app.post('/api/chats.create', chatController.create);

  // POST request to delete Photo.
  app.post('/api/chats.delete', chatController.delete);

  // POST request to update Photo.
  app.post('/api/chats.update', chatController.update);
};
