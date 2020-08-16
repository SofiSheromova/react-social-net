const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const createError = require('http-errors');

const config = require('config');
const routes = require('./routes/index');
const errorMiddleware = require('./middleware/error');
const {logger, useRequestLogger} = require('./middleware/logger');

process.on('uncaughtException', (err) => {
  logger.error('Possibly Uncaught Exception. \n%O', err);

  process.exit(1);
});

const app = express();

const publicDir = path.join(__dirname, 'client', 'public');

useRequestLogger(app);
app.use(express.urlencoded({extended: true}));
app.use(express.static(publicDir));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

routes(app);

app.all('*', (req, res, next) => {
  next(createError(404, `Can't find ${req.originalUrl} on this server!`));
});

errorMiddleware(app);

const port = config.get('port');
const mongodbUser = process.env.DB_USER;
const mongodbPassword = process.env.DB_PASSWORD;
const mongodbDatabase = 'social-net';

process.on('unhandledRejection', function(err) {
  logger.error('Possibly Unhandled Rejection.\n%O', err);

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
    console.info(`Server started on ${port}`);
    console.info(`Open http://localhost:${port}/`);
  });
}

start();
