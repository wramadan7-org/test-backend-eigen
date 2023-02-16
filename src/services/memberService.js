const httpStatus = require('http-status');
const { Member } = require('../models');
const BaseError = require('../helpers/baseError');

/**
 * Service to create member
 * @param {Object} data
 * @returns Object
 */
const createMemberService = async (data) => {
  const member = await Member.create(data);

  return member;
};

/**
 * Service to get all member
 */
const getAllMemberService = () => Member.findAll();

module.exports = {
  createMemberService,
  getAllMemberService,
};
