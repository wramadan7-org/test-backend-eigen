const httpStatus = require('http-status');
const { Member } = require('../models');
const BaseError = require('../helpers/baseError');

const createMemberService = async (data) => {
  const member = await Member.create(data);

  return member;
};

module.exports = {
  createMemberService,
};
