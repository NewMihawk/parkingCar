const APIError = require('../errors/api-error')

async function createParkingService(request) {
  try {
      const user = await new Promise((resolve, reject) => signIn(request , function(response, error){
        if(error){
          reject(new APIError(error.name , error.message))
        }
        resolve(response)
      }))

      return {
        message : 'User Authorized.',
        data : {
          idToken : user.idToken,
          accessToken : user.accessToken,
          refreshToken : user.refreshToken,
          email : user.email
        }
      }
  } catch (error) {
      console.log('error signing in', error)
      throw new APIError(error.name , error.message)
  }
}


module.exports = {
  createParkingService
}