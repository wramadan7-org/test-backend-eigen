const { Router } = require('express');
const {
  createMemberController,
  getAllMemberController,
  getMemberByIdController,
  updateMemberByIdController,
  deleteMemberByIdController,
} = require('../../controllers/memberController');
const validate = require('../../middlewares/validator');
const { createMemberValidation, getMemberByIdValdation, updateMemberByIdValidation } = require('../../validations/memberValidation');

const router = Router();

router.post('/', validate(createMemberValidation), createMemberController);
router.get('/', getAllMemberController);
router.get('/:id', validate(getMemberByIdValdation), getMemberByIdController);
router.patch('/:id', validate(updateMemberByIdValidation), updateMemberByIdController);
router.delete('/:id', validate(getMemberByIdValdation), deleteMemberByIdController);

module.exports = router;
