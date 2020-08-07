const {Schema, model, Types} = require('mongoose');

const PostSchema = new Schema({
  title: {type: String, max: 100, required: true},
  text: {type: String, max: 2000, required: true},
  ownerId: {type: Schema.ObjectId, ref: 'User', required: true},
  likes: [{type: Schema.ObjectId, ref: 'User'}],
  photos: [{type: Schema.ObjectId, ref: 'Photo'}],
  date: {type: Date, default: Date.now},
});

module.exports.ObjectId = Types.ObjectId;
module.exports = model('Post', PostSchema);
