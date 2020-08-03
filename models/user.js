const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
    {
      first_name: {type: String, max: 100, required: true},
      second_name: {type: String, max: 100, required: true},
      date_of_birth: {type: Date},
      city: {type: String, max: 100},
      avatar: {type: Schema.ObjectId, ref: 'Photo'},
      // photos: [{type: Schema.ObjectId, ref: 'Photo'}],
      // posts: [{type: Schema.ObjectId, ref: 'News'}],
      friends: [{type: Schema.ObjectId, ref: 'User'}],
      subscriptions: [{type: Schema.ObjectId, ref: 'User'}],
    },
);

UserSchema
    .virtual('fullname')
    .get(function() {
      // eslint-disable-next-line no-invalid-this
      return this.first_name + ', ' + this.second_name;
    });

module.exports = model('User', UserSchema);
