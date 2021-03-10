const express = require('express')
const router = express.Router()
const ParkController = require('../controllers/parking-controller')


router.post('/parking', ParkController.createParking)
  
router.get('/parking', ParkController.getParking)


module.exports = router