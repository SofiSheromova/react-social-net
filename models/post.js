const {Schema, model} = require('mongoose');
const {renameProperty, formatDateToSend} = require('./helpers');

const PostSchema = new Schema({
  title: {type: String, max: 100, required: true},
  text: {type: String, max: 2000, required: true},
  ownerId: {type: Schema.ObjectId, ref: 'User', required: true},
  likes: [{type: Schema.ObjectId, ref: 'User'}],
  photos: [{type: Schema.ObjectId, ref: 'Photo'}],
  date: {type: Date, default: Date.now},
});

if (!PostSchema.options.toObject) {
  PostSchema.options.toObject = {};
}
PostSchema.options.toObject.versionKey = false;
PostSchema.options.toObject.transform = function(doc, ret, options) {
  renameProperty(ret, '_id', 'id');
  ret.date = formatDateToSend(ret.date);
  return ret;
};

module.exports = model('Post', PostSchema);
