module.exports = (app) => {
  app.get('/api/users.get', async (req, res) => {
    res.json({
      response: {count: 0, items: []},
    });
  });
};
