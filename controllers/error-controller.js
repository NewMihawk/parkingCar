function errorHandler (err, response) {
    const errType = err.name
    let resJson = { } 
    switch (errType) {
      case 'NotFoundError':
        return response
          .status(200)
          .json({ ...resJson, code : 404, errorName: 'not_found', message: err.message })
      case 'InvalidRequestError':
        return response
          .status(200)
          .json({ ...resJson, code : 400, errorName: 'bad_request', message: err.message})
      case 'NotAuthorizedException':
        return response
          .status(200)
          .json({ ...resJson, code : 401, errorName: 'unauthorized', message: err.message})
      case 'PermissionDeniedError':
        return response
          .status(200)
          .json({ ...resJson, code : 403, errorName: 'forbidden', message: err.message})
      case 'OutOfStockError':
        return response
          .status(200)
          .json({ ...resJson, code : 406, errorName: 'bad_request', message: err.message })
      case 'DuplicateError':
        return response
          .status(200)
          .json({ ...resJson, code : 409, errorName: 'conflict', message: err.message })
      case 'UsernameExistsException':
        return response
          .status(200)
          .json({ ...resJson, code : 409, errorName: 'conflict', message: err.message })
      case 'RequestLargeError':
        return response
          .status(200)
          .json({ ...resJson, code : 413, errorName: 'bad_request', message: err.message})
      default:
        return response
          .status(200)
          .json({ ...resJson, code : 500, errorName: 'internal', message: err.message || 'error'})
    }
  }
  
  module.exports = {
    errorHandler
  }