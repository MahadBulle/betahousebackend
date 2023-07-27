const mongoose = require('mongoose')
const joi = require('joi')
const aboutSchema = new mongoose.Schema({
  Description: {
    type: String,
    required: true
  },
  ShortDescription: {
    type: String,
    required: true
  }
})

const AboutModel = mongoose.model('About', aboutSchema)

// validation
function aboutValidation (aboutObj) {
  const aboutval = joi.object({
    Description: joi.string().required(),
    ShortDescription: joi.string().required()
  })
  return aboutval.validate(aboutObj)
}

module.exports = {
  AboutModel,
  aboutValidation
}
