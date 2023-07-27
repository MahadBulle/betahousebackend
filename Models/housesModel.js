const mongoose = require('mongoose')
const housesSchema = new mongoose.Schema({
  Type: {
    type: String,
    required: true
  },
  Area: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },

  Age: {
    type: String,
    required: true
  },
  Rent: {
    type: String,
    required: true
  },
  Rooms: {
    type: Number,
    required: true
  },
  Toilets: {
    type: Number,
    required: true
  },
  MasterRoom: {
    type: String,
    required: true,
    enum: (['Yes', 'No'])
  },
  Parking: {
    type: String,
    required: true,
    enum: (['Yes', 'No'])
  },
  Image: {
    type: String,
    required: true
  },
  Deposit: {
    type: String,
    required: true
  },
  Status: {
    type: String,
    required: true,
    enum: (['Available', 'Unavailable'])
  },
  Description: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  }

}, { timestamps: true })

const HousesModel = mongoose.model('Houses', housesSchema)

module.exports = HousesModel
