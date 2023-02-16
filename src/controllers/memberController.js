const httpStatus = require('http-status');
const catchAsync = require('../helpers/catchAsync');
const BaseError = require('../helpers/baseError');
const memberService = require('../services/memberService');

const createMemberController = catchAsync(async (req, res) => {
  const requestBody = req.body;

  const member = await memberService.createMemberService(requestBody);

  if (!member) throw new BaseError('Fail to create member', httpStatus.CONFLICT);

  res.sendWrapped('Create member successfully', member, httpStatus.CREATED);
});

module.exports = {
  createMemberController,
};
