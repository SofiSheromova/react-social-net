const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/api');
const config = require('config');

const app = express();

if (config.get('debug')) {
  app.use(morgan('dev'));
}

const publicDir = path.join(__dirname, 'client', 'public');

app.use(express.urlencoded({extended: true}));
app.use(express.static(publicDir));
app.use(bodyParser.json());

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next();
});

apiRoutes(app);

const port = config.get('port');
const mongodbUser = process.env.DB_USER;
const mongodbPassword = process.env.DB_PASSWORD;
const mongodbDatabase = 'social-net';

process.on('unhandledRejection', function(reason, p) {
  console.log(
      'Possibly Unhandled Rejection at: Promise ', p,
      '\nReason: ', reason,
  );
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
