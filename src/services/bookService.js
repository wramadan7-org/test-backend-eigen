const { Book } = require('../models');

const createBookService = async (data) => {
  const book = await Book.create(data);

  return book;
};

module.exports = {
  createBookService,
};
