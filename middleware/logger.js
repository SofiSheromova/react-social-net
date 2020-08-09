const {createLogger, format, transports} = require('winston');
const expressWinston = require('express-winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.errors({stack: true}),
      format.simple(),
  ),
  transports: [
    new transports.File({filename: 'error.log', level: 'warn'}),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
        format.prettyPrint(),
        format.colorize({all: true}),
    ),
  }));
}

const requestLogger = expressWinston.logger({
  transports: [
    new transports.Console(),
  ],
  format: format.combine(
      format.colorize({all: true}),
      format.simple(),
  ),
});

module.exports = {
  logger,
  requestLogger,
};
