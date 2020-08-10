const {createLogger, format, transports} = require('winston');
const expressWinston = require('express-winston');
const path = require('path');

const isDevMode = process.env.NODE_ENV === 'development';
const logsDir = 'logs';

const logger = createLogger({
  format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.errors({stack: true}),
      format.splat(),
      format.simple(),
  ),
  transports: [
    new transports.File({
      level: 'warn',
      filename: path.join(logsDir, 'error.log'),
    }),
  ],
});

if (isDevMode) {
  logger.add(new transports.Console({
    level: 'debug',
    format: format.combine(
        format.prettyPrint(),
        format.colorize({all: true}),
    ),
  }));
}

const statusLevels = {
  'success': 'debug',
  'warn': 'debug',
  'error': 'error',
};

const fileRequestLogger = expressWinston.logger({
  statusLevels,
  msg: (req, res) =>
    `HTTP/${req.httpVersion} ${req.method} ${res.statusCode} ${req.url} ` +
      `${res.responseTime}ms`,
  colorize: false,
  format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.printf((info) => {
        return `${info.timestamp} ${info.message}`;
      }),
  ),
  meta: false,
  transports: [
    new transports.File({
      level: 'warn',
      filename: path.join(logsDir, 'request.log'),
    }),
  ],
});

const consoleRequestLogger = expressWinston.logger({
  statusLevels,
  msg: (req, res) =>
    `HTTP/${req.httpVersion} ${req.method} ${res.statusCode} ${req.url} ` +
    `${res.responseTime}ms\n`,
  colorize: true,
  format: format.combine(
      format.colorize(),
      format.simple(),
  ),
  meta: true,
  dynamicMeta: (req, res) =>
    ({
      query: req.query,
      res: undefined,
      req: undefined,
      responseTime: undefined,
    }),
  transports: [
    new transports.Console({level: 'debug'}),
  ],
});

const useRequestLogger = (app) => {
  app.use(fileRequestLogger);
  if (isDevMode) {
    app.use(consoleRequestLogger);
  }
};

module.exports = {
  logger,
  fileRequestLogger,
  consoleRequestLogger,
  useRequestLogger,
};
