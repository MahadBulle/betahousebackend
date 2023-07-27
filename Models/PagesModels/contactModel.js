const mongoose = require('mongoose')
const joi = require('joi')
const contactSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Phone: {
    type: Number,
    required: true
  },
  Message: {
    type: String,
    required: true
  }
})

const ContactModel = mongoose.model('Contact', contactSchema)

// validation
function contactValidation (contactObj) {
  const contactVal = joi.object({
    Name: joi.string().required(),
    Phone: joi.number().required(),
    Message: joi.string().required()
  })
  return contactVal.validate(contactObj)
}

module.exports = {
  ContactModel,
  contactValidation
}
