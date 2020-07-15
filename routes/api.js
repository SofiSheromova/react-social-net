const News = require('../models/News');

module.exports = (app) => {
  app.get('/api/getNews', async (req, res) => {
    const news = await News.find({});
    res.json(news);
    console.log('Sent list of items');
  });

  app.post('/api/createNews', async (req, res) => {
    const currentNews = new News({
      content: req.body.content,
    });

    await currentNews.save();
    res.json('success');
  });
};
