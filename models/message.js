const {Schema, model} = require('mongoose');

const MessageSchema = new Schema({
  text: {type: String, max: 2000, trim: true, required: true},
  owner_id: {type: Schema.ObjectId, ref: 'User', required: true},
  chat_id: {type: Schema.ObjectId, ref: 'Chat', required: true},
  date: {type: Date, default: Date.now},
});

module.exports = model('Message', MessageSchema);
