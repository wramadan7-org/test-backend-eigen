const httpStatus = require('http-status');
const catchAsync = require('../helpers/catchAsync');
const BaseError = require('../helpers/baseError');
const memberService = require('../services/memberService');
const { memberArrayDto, memberObjectDto } = require('../dto/memberDTO');

/**
 * Controller create member
 */
const createMemberController = catchAsync(async (req, res) => {
  const requestBody = req.body;

  const member = await memberService.createMemberService(requestBody);

  if (!member) throw new BaseError('Fail to create member', httpStatus.CONFLICT);

  const response = memberObjectDto(member);

  res.sendWrapped('Create member successfully', response, httpStatus.CREATED);
});

/**
 * Controller get all member
 */
const getAllMemberController = catchAsync(async (req, res) => {
  const member = await memberService.getAllMemberService();

  if (member && member.length <= 0) return res.sendWrapped('List member', [], httpStatus.OK);

  // Set result member
  const response = memberArrayDto(member);

  return res.sendWrapped('List member', response, httpStatus.OK);
});

/**
 * Controller get member by ID
 */
const getMemberByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;

  const member = await memberService.getMemberByIdService(id);

  if (!member) throw new BaseError(`Member with ID ${id} not found`, httpStatus.NOT_FOUND);

  const response = memberObjectDto(member);

  res.sendWrapped(`Member with ID ${id}`, response, httpStatus.OK);
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

  if (member && member[0] === 0) throw new BaseError('Fail to update member', httpStatus.CONFLICT);

  const response = memberObjectDto(dataValues);

  res.sendWrapped(`Member with ID ${id} successfully updated`, response, httpStatus.OK);
});

/**
 * Controller delet member by ID
 */
const deleteMemberByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;

  const isValidMember = await memberService.getMemberByIdService(id);

  if (!isValidMember) throw new BaseError(`Member with ID ${id} not found`, httpStatus.NOT_FOUND);

  await memberService.deleteMemberByIdService(id);

  const response = memberObjectDto(isValidMember);

  res.sendWrapped(`Member with ID ${id} successfully deleted`, response, httpStatus.OK);
});

module.exports = {
  createMemberController,
  getAllMemberController,
  getMemberByIdController,
  updateMemberByIdController,
  deleteMemberByIdController,
};
