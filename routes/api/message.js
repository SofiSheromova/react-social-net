const messageController = require('../../controllers/message');

module.exports = (app) => {
  // GET request for list of all Message items.
  app.get('/api/messages.get', messageController.list);

  // GET request for one Message.
  app.get('/api/messages.getById', messageController.info);

  // POST request for creating Message.
  app.post('/api/messages.create', messageController.create);

  // POST request to delete Message.
  app.post('/api/messages.delete', messageController.delete);

  // POST request to update Message.
  app.post('/api/messages.update', messageController.update);
};
