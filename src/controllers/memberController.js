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

/**
 * Controller get member by ID
 */
const getMemberByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;

  const member = await memberService.getMemberByIdService(id);

  if (!member) throw new BaseError(`Member with ID ${id} not found`, httpStatus.NOT_FOUND);

  res.sendWrapped(`Member with ID ${id}`, member, httpStatus.OK);
});

/**
 * Controller update member by ID
 */
const updateMemberByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const requestBody = req.body;

  const validMember = await memberService.getMemberByIdService(id);

  if (!validMember) throw new BaseError(`Member with ID ${id} not found`, httpStatus.NOT_FOUND);

  // Assign key value
  const data = Object.assign(validMember, requestBody);
  const { dataValues } = data;

  const member = await memberService.updateMemberByIdService(id, dataValues);

  res.sendWrapped(`Member with ID ${id} successfully updated`, member, httpStatus.OK);
});

/**
 * Controller delet member by ID
 */
const deleteMemberByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;

  const isValidMember = await memberService.getMemberByIdService(id);

  if (!isValidMember) throw new BaseError(`Member with ID ${id} not found`, httpStatus.NOT_FOUND);

  await memberService.deleteMemberByIdService(id);

  res.sendWrapped(`Member with ID ${id} successfully deleted`, isValidMember, httpStatus.OK);
});

module.exports = {
  createMemberController,
  getAllMemberController,
  getMemberByIdController,
  updateMemberByIdController,
  deleteMemberByIdController,
};
