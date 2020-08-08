const Photo = require('../models/photo');
const {errorHandler} = require('./validations');

// Get list of all photos.
exports.list = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Photo list');
});

// Get information for a specific photo.
exports.info = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Photo detail: ' + req.params.id);
});

// Handle photo create on POST.
exports.create = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Photo create POST');
});

// Handle photo delete on POST.
exports.delete = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Photo delete POST');
});

// Handle photo update on POST.
exports.update = errorHandler((req, res) => {
  res.send('NOT IMPLEMENTED: Photo update POST');
});
