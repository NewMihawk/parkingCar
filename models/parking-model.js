const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CarSchema = new Schema({
  numberPlate: {
    type: String,
    required: true,
  }
})

const CarModel = mongoose.model('Car', CarSchema)
module.exports = CarModel