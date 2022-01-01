const { StatusCodes } = require('http-status-codes')
const {CustomAPIError} = require('./custom-error');

export class UnauthenticatedError extends CustomAPIError {
  constructor(message: any) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}


