const httpStatus = require('http-status');
const BaseError = require('../helpers/baseError');
const catchAsync = require('../helpers/catchAsync');
const bookService = require('../services/bookService');

const createBookController = catchAsync(async (req, res) => {
  const requestBody = req.body;

  const book = await bookService.createBookService(requestBody);

  if (!book) throw new BaseError('Fail to create book', httpStatus.CONFLICT);

  res.sendWrapped('Create book successfully', book, httpStatus.CREATED);
});

module.exports = {
  createBookController,
};
