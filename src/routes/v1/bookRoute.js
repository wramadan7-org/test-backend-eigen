const { Router } = require('express');
const bookController = require('../../controllers/bookController');
const validate = require('../../middlewares/validator');
const { createBookValidation } = require('../../validations/bookValidation');

const router = Router();

router.post('/', validate(createBookValidation), bookController.createBookController);

module.exports = router;
