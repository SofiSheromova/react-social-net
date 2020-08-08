const Message = require('../models/message');
const {errorHandler} = require('./validations');

// Get list of all messages.
exports.list = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Message list');
});

// Get information for a specific message.
exports.info = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Message detail: ' + req.params.id);
});

// Handle message create on POST.
exports.create = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Message create POST');
});

// Handle message delete on POST.
exports.delete = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Message delete POST');
});

// Handle message update on POST.
exports.update = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Message update POST');
});
