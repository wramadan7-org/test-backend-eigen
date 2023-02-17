const { body } = require('express-validator');

const createBookValidation = [
  body('title')
    .isString()
    .notEmpty()
    .withMessage('Field title cannot be empty')
    .exists()
    .withMessage('Field author is require'),
  body('author')
    .isString()
    .exists()
    .withMessage('Field author is require'),
  body('stock')
    .isNumeric()
    .withMessage('Field stock only contain number')
    .notEmpty()
    .withMessage('Field stock cannot be empty')
    .exists()
    .withMessage('Field stock is require'),
];

module.exports = {
  createBookValidation,
};
