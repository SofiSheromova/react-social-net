const newsfeedAPI = require('./api/newsfeed');
const usersAPI = require('./api/users');

module.exports = (app) => {
  const routes = [newsfeedAPI, usersAPI];
  for (const route of routes) {
    route(app);
  }
};
