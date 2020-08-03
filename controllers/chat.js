const Chat = require('../models/chat');
const {errorChecker} = require('./validations');

// Get list of all chats.
exports.list = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Chat list');
});

// Get information for a specific chat.
exports.info = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Chat detail: ' + req.params.id);
});

// Handle chat create on POST.
exports.create = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Chat create POST');
});

// Handle chat delete on POST.
exports.delete = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Chat delete POST');
});

// Handle chat update on POST.
exports.update = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Chat update POST');
});
