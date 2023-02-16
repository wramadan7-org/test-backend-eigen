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

/**
 * Service to get member by ID
 * @param {Number} id
 * @returns Object
 */
const getMemberByIdService = async (id) => {
  const member = await Member.findByPk(id);

  return member;
};

/**
 * Service update member by ID
 * @param {Number} id
 * @param {Object} data
 * @returns Object
 */
const updateMemberByIdService = async (id, data) => {
  const member = await Member.update(data, {
    where: { id },
  });

  return member;
};

/**
 * Service delete member by ID
 * @param {Number} id
 * @returns Object
 */
const deleteMemberByIdService = async (id) => {
  const member = await Member.destroy({ where: { id } });

  return member;
};

module.exports = {
  createMemberService,
  getAllMemberService,
  getMemberByIdService,
  updateMemberByIdService,
  deleteMemberByIdService,
};
