const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');

const { NODE_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('*', cors());

// Wrap the response
app.response.sendWrapped = function (message, data, statusCode = httpStatus.OK) {
  return this.status(statusCode).send({
    status: statusCode,
    message,
    data,
  });
};

app.listen(NODE_PORT, () => {
  console.log(`Server run on port ${NODE_PORT}`);
});

module.exports = app;
