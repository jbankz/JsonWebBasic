const {CustomAPIError} = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

export  default class BadRequest extends CustomAPIError {
  constructor(message: any) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

