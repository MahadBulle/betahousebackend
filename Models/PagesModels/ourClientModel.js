const mongoose = require('mongoose')
const joi = require('joi')
const clientSchema = new mongoose.Schema({
  ClientName: {
    type: String,
    required: true
  },
  Logo: {
    type: String,
    required: true
  }
})

const ClientModel = mongoose.model('Client', clientSchema)

// valiadtion
function clientvalidation (clientOBj) {
  const clientval = joi.object({
    ClientName: joi.string().required(),
    Logo: joi.string().required()
  })
  return clientval.validate(clientOBj)
}

module.exports = {
  ClientModel,
  clientvalidation
}
