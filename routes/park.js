const express = require('express')
const router = express.Router()
const ParkController = require('../controllers/parking-controller')

router.post('/parking', ParkController.createParking)


module.exports = router