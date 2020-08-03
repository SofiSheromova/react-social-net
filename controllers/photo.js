const Photo = require('../models/photo');
const {errorChecker} = require('./validations');

// Get list of all photos.
exports.list = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Photo list');
});

// Get information for a specific photo.
exports.info = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Photo detail: ' + req.params.id);
});

// Handle photo create on POST.
exports.create = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Photo create POST');
});

// Handle photo delete on POST.
exports.delete = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Photo delete POST');
});

// Handle photo update on POST.
exports.update = errorChecker((req, res) => {
  res.send('NOT IMPLEMENTED: Photo update POST');
});
