const { Router } = require('express');
const { createMemberController, getAllMemberController } = require('../../controllers/memberController');
const validate = require('../../middlewares/validator');
const { createMemberValidation } = require('../../validations/memberValidation');

const router = Router();

router.post('/', validate(createMemberValidation), createMemberController);
router.get('/', getAllMemberController);

module.exports = router;
