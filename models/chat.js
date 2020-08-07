const {Schema, model} = require('mongoose');

const ChatSchema = new Schema({
  adminId: {type: Schema.ObjectId, ref: 'User', required: true},
  users: [{type: Schema.ObjectId, ref: 'User'}],
  title: {type: String, max: 100, required: true},
  date: {type: Date, required: true, default: Date.now},
});

module.exports = model('Chat', ChatSchema);
