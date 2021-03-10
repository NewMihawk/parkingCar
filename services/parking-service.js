const APIError = require('../errors/api-error')

const CarModel = require('../models/parking-model')

async function createParkingService(request) {
  try {
    console.log(request,'request')
    const payload = request
    const product = new CarModel(payload)
    await product.save()

    return {
    message : 'User Authorized.',
    }
  } catch (error) {
      console.log('error signing in', error)
      throw new APIError(error.name , error.message)
  }
}


async function getParkingService(request) {
    try {
        console.log(Car.find(),'request.body')
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
  createParkingService,
  getParkingService
}