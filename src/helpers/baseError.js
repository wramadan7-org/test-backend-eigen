class BaseError extends Error {
  constructor(message, statusCode, stack = '', isOperational = true) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = isOperational;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = BaseError;
