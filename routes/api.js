const chatAPI = require('./api/chat');
const messageAPI = require('./api/message');
const newsfeedAPI = require('./api/newsfeed');
const photoAPI = require('./api/photo');
const usersAPI = require('./api/users');
const wallAPI = require('./api/wall');

module.exports = (app) => {
  const routes = [
    chatAPI,
    messageAPI,
    newsfeedAPI,
    photoAPI,
    usersAPI,
    wallAPI,
  ];
  for (const route of routes) {
    route(app);
  }
};
