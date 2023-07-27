const mongoose = require('mongoose')
const himagesSchema = new mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Houses',
    required: true
  },
  images: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  }

}, { timestamps: true })

const HimagesModel = mongoose.model('Himages', himagesSchema)

module.exports = HimagesModel
