const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: (['Active', 'Pending']),
    default: 'Active'
  },
  role: {
    type: String,
    default: 'user'
  }

}, { timestamps: true })

const UsersModel = mongoose.model('Users', usersSchema)

// ----------------------------------------------------------------

module.exports = UsersModel
