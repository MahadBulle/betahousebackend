const mongoose = require('mongoose')
const joi = require('joi')
const gallerySchema = new mongoose.Schema({
  ImageTitle: {
    type: String,
    required: true
  },
  Image: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  }
})

const GalleryModel = mongoose.model('gallery', gallerySchema)

// va;iadtion
function galleryvalidation (galleryObj) {
  const galleryval = joi.object({
    ImageTitle: joi.string().required(),
    Image: joi.string().required(),
    userId: joi.string().required()

  })
  return galleryval.validate(galleryObj)
}

module.exports = {
  GalleryModel,
  galleryvalidation
}
