const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true,
    enum: (['Active', 'Pending', 'blocked'])
  },
  role: {
    type: String,
    required: true
  }

}, { timestamps: true })

const UsersModel = mongoose.model('Users', usersSchema)

// ----------------------------------------------------------------

module.exports = UsersModel
