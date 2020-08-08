const Chat = require('../models/chat');
const {errorHandler} = require('./validations');

// Get list of all chats.
exports.list = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Chat list');
});

// Get information for a specific chat.
exports.info = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Chat detail: ' + req.params.id);
});

// Handle chat create on POST.
exports.create = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Chat create POST');
});

// Handle chat delete on POST.
exports.delete = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Chat delete POST');
});

// Handle chat update on POST.
exports.update = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Chat update POST');
});
