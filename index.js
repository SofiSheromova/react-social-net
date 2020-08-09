const path = require('path');
const fs = require('fs');

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const createError = require('http-errors');

const config = require('config');
const apiRoutes = require('./routes/api');
const errorMiddleware = require('./middleware/error');
const {logger} = require('./middleware/logger');

process.on('uncaughtException', (err) => {
  logger.error(`Possibly Uncaught Exception: ${err.name}, \n
  Message: ${err.message}`);

  process.exit(1);
});

const app = express();

if (config.get('debug')) {
  app.use(morgan('dev'));
}

const format = ':remote-addr - :remote-user [:date[clf]] ":method [:status] ' +
    ':url HTTP/:http-version" :res[content-length] ":referrer" ":user-agent"\n';
app.use(morgan(format, {
  skip: function(req, res) {
    return res.statusCode < 400;
  },
  stream: fs.createWriteStream(path.join(__dirname, 'request.log'),
      {flags: 'a'}),
}));

const publicDir = path.join(__dirname, 'client', 'public');

app.use(express.urlencoded({extended: true}));
app.use(express.static(publicDir));
app.use(bodyParser.json());

apiRoutes(app);

app.all('*', (req, res, next) => {
  next(createError(404, `Can't find ${req.originalUrl} on this server!`));
});

errorMiddleware(app);

const port = config.get('port');
const mongodbUser = process.env.DB_USER;
const mongodbPassword = process.env.DB_PASSWORD;
const mongodbDatabase = 'social-net';

process.on('unhandledRejection', function(reason, p) {
  logger.error(`Possibly Unhandled Rejection at: Promise ${p} \n
    Reason: ${reason}`);

  process.exit(1);
});

/**
 * App start function
 */
async function start() {
  await mongoose.connect(
      `mongodb+srv://${mongodbUser}:${mongodbPassword}@cluster0.aqlnn.mongodb.net/${mongodbDatabase}`,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
  );
  app.listen(port, () => {
    logger.info(`Server started on ${port}`);
    logger.info(`Open http://localhost:${port}/`);
  });
}

start();
