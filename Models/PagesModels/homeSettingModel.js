const mongoose = require('mongoose')
const HomeSettingSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  Complaint_Email: {
    type: String,
    required: true
  },
  Complaint_Phone: {
    type: Number,
    required: true
  },
  facebook: {
    type: String,
    required: true
  },
  tiktok: {
    type: String,
    required: true
  },
  twitter: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    required: true
  },
  HeroTitle: {
    type: String,
    required: true
  },
  HeroDescription: {
    type: String,
    required: true
  },
  heroImage: {
    type: String,
    required: true
  },
  footerText: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  }
})

const HomeSettingModel = mongoose.model('HomeSetting', HomeSettingSchema)

module.exports = HomeSettingModel
