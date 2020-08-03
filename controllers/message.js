const Message = require('../models/message');
const {errorChecker} = require('./validations');

// Get list of all messages.
exports.list = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Message list');
});

// Get information for a specific message.
exports.info = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Message detail: ' + req.params.id);
});

// Handle message create on POST.
exports.create = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Message create POST');
});

// Handle message delete on POST.
exports.delete = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Message delete POST');
});

// Handle message update on POST.
exports.update = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Message update POST');
});
