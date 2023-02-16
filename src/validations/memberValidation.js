const { body, param } = require('express-validator');

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

const getMemberByIdValdation = [
  param('id')
    .isNumeric()
    .withMessage('Parameter ID is only contain number'),
];

const updateMemberByIdValidation = [
  param('id')
    .isNumeric()
    .withMessage('Parameter ID is only contain number'),
  body('name')
    .isString()
    .notEmpty()
    .optional(),
  body('isPenalized')
    .isBoolean()
    .optional(),
];

module.exports = {
  createMemberValidation,
  getMemberByIdValdation,
  updateMemberByIdValidation,
};
