const News = require('../../models/News');

module.exports = (app) => {
  app.get('/api/newsfeed.get', async (req, res) => {
    const params = {
      count: 50,
      offset: 0,
    };
    const requestParams = req.query;
    const count = Math.floor(requestParams.count || params.count);
    const offset = Math.floor(requestParams.offset || params.offset);
    if (isNaN(count) || count < 0 || isNaN(offset) || offset < 0) {
      res.json({
        error: 'One of the parameters specified was missing or invalid.',
      });
      return;
    }
    params.count = Math.min(params.count, count);
    params.offset = offset;
    const newsPromise = News.find({})
        .sort('-creationDate')
        .skip(params.offset)
        .limit(params.count);
    const countPromise = News.count({});
    Promise.all([newsPromise, countPromise])
        .then(([news, count]) => {
          res.json({
            response: {count, items: news},
          });
        })
        .catch((err) => {
          res.json({
            error: 'Unable to retrieve data',
          });
          console.error(err);
        });
  });

  app.post('/api/newsfeed.create', async (req, res) => {
    const currentNews = new News({
      content: req.body.content,
    });

    await currentNews.save();
    res.json('success');
  });

  let counter = 1;
  app.get('/api/newsfeed.create', async (req, res) => {
    const currentNews = new News({
      content: `Тут будет много новостей. Новость №${counter}`,
    });
    counter++;

    await currentNews.save();
    res.json('success');
  });
};
