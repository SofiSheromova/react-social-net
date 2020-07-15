const {Schema, model} = require('mongoose');

const schema = new Schema({
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('News', schema);
