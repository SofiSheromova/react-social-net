module.exports = (app) => {
  const api = require('./api/index');
  const routes = Object.values(api);
  for (const route of routes) {
    route(app);
  }
};
