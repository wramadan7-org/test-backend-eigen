const { body } = require('express-validator');

const createMemberValidation = [
  body('name')
    .isString()
    .notEmpty()
    .withMessage('Field name cannot be empty'),
  body('isPenalized')
    .isBoolean()
    .withMessage('Field isPenalized is boolean')
    .optional()
    .default(false),
];

module.exports = {
  createMemberValidation,
};
