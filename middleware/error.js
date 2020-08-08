const sendErrorDev = (err, res) => {
  res.status(err.status).json({
    status: err.status,
    message: err.message,
    details: err.details,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  res.status(err.status).json({
    status: err.status,
    message: err.message,
    details: err.details,
  });
};

module.exports = (app) => {
  app.use((err, req, res, next) => {
    err.status = err.status || 500;
    if (process.env.NODE_ENV === 'development') {
      sendErrorDev(err, res);
    } else if (process.env.NODE_ENV === 'production') {
      sendErrorProd(err, res);
    }
  });
};
