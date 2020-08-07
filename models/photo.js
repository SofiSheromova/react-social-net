const {Schema, model} = require('mongoose');

const PhotoSchema = new Schema(
    {
      source: {type: String, required: true},
      date: {type: Date, default: Date.now},
      text: {type: String, max: 100},
      ownerId: {type: Schema.ObjectId, ref: 'User'},
    },
);

module.exports = model('Photo', PhotoSchema);
