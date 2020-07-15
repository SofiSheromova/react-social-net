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
});

module.exports = model('News', schema);
