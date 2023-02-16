const { Router } = require('express');
const { createMemberController, getAllMemberController, getMemberByIdController } = require('../../controllers/memberController');
const validate = require('../../middlewares/validator');
const { createMemberValidation, getMemberByIdValdation } = require('../../validations/memberValidation');

const router = Router();

router.post('/', validate(createMemberValidation), createMemberController);
router.get('/', getAllMemberController);
router.get('/:id', validate(getMemberByIdValdation), getMemberByIdController);

module.exports = router;
