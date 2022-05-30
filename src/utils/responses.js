/**
 * @name sucessResponse
 * @description A handler to respond success responses
 * @param {Object} req The request object from the rute
 * @param {Object} res The response object from the rute
 * @param {Number} status The status code of the response
 * @param {String} message The message of the response
 * @param {Object} data The data from the response
 */
const sucessResponse = (req, res, status = 200, message, data = {}) =>
  res.status(status).send({ status: 'Success', message, data });

/**
 * @name errorResponse
 * @description A handler to respond error responses
 * @param {Object} req The request object from the rute
 * @param {Object} res The response object from the rute
 * @param {Number} status The status code of the error
 * @param {String} message The message of the error
 */
const errorResponse = (req, res, status = 500, message) =>
  res.status(status).send({ status: 'Error', message });

module.exports = { sucessResponse, errorResponse };
