const {Schema, model} = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('config').get('secret');

const UserSchema = new Schema(
    {
      firstName: {type: String, lowercase: true, max: 100, required: true},
      lastName: {type: String, lowercase: true, max: 100, required: true},
      email: {type: String, lowercase: true, required: true, index: true},
      hash: {type: String, required: true},
      salt: {type: String, required: true},
      dateOfBirth: {type: Date},
      avatar: {type: Schema.ObjectId, ref: 'Photo'},
      // photos: [{type: Schema.ObjectId, ref: 'Photo'}],
      // posts: [{type: Schema.ObjectId, ref: 'News'}],
      friends: [{type: Schema.ObjectId, ref: 'User'}],
      subscriptions: [{type: Schema.ObjectId, ref: 'User'}],
    }, {
      timestamps: true,
    },
);

// UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto
      .randomBytes(16)
      .toString('hex');
  this.hash = crypto
      .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
      .toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  const hash = crypto
      .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
      .toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

UserSchema.methods.toAuthJSON = function() {
  return {
    id: this._id,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    dateOfBirth: this.dateOfBirth,
    city: this.city,
    avatar: this.avatar,
    friends: this.friends,
    subscriptions: this.subscriptions,
  };
};

UserSchema
    .virtual('fullname')
    .get(function() {
      // eslint-disable-next-line no-invalid-this
      return this.firstName + ', ' + this.lastName;
    });

module.exports = model('User', UserSchema);
