require('dotenv').config();
const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const morgan = require('./configurations/morgan');
const logger = require('./configurations/logger');
const BaseError = require('./helpers/baseError');
const { errorConverter, errorHandler } = require('./middlewares/errorHandler');
const routesV1 = require('./routes/v1/index');

const { NODE_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('*', cors());
app.use(morgan.successHandler);
app.use(morgan.errorHandler);
app.use('/v1', routesV1);

// Wrap the response
app.response.sendWrapped = function (message, data, statusCode = httpStatus.OK) {
  return this.status(statusCode).send({
    status: statusCode,
    message,
    data,
  });
};

app.listen(NODE_PORT, () => {
  logger.info(`Server run on port ${NODE_PORT}`);
});

app.use((req, res, next) => {
  next(new BaseError('Not found', httpStatus.NOT_FOUND));
});

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
