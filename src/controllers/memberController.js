const httpStatus = require('http-status');
const catchAsync = require('../helpers/catchAsync');
const BaseError = require('../helpers/baseError');
const memberService = require('../services/memberService');

/**
 * Controller create member
 */
const createMemberController = catchAsync(async (req, res) => {
  const requestBody = req.body;

  const member = await memberService.createMemberService(requestBody);

  if (!member) throw new BaseError('Fail to create member', httpStatus.CONFLICT);

  res.sendWrapped('Create member successfully', member, httpStatus.CREATED);
});

/**
 * Controller get all member
 */
const getAllMemberController = catchAsync(async (req, res) => {
  const member = await memberService.getAllMemberService();

  if (member && member.length <= 0) return res.sendWrapped('List member', [], httpStatus.OK);

  // Set result member
  const memberMap = member.map((o) => {
    const data = {
      code: o.code || '',
      name: o.name,
    };

    return data;
  });

  return res.sendWrapped('List member', memberMap, httpStatus.OK);
});

module.exports = {
  createMemberController,
  getAllMemberController,
};
