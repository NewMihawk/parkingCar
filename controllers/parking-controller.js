const { expressHandler } = require('./express-handler')
const { createParkingService } = require('../services/parking-service')

async function createParking(req) {
  const user = await createParkingService(req.body)
  return user
}


module.exports = {
  createParking : expressHandler({
    handler : createParking
  })
}