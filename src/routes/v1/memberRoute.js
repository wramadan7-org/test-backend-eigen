const { Router } = require('express');
const { createMemberController } = require('../../controllers/memberController');

const router = Router();

router.post('/', createMemberController);

module.exports = router;
