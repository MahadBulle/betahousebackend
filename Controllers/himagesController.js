const HimagesModel = require('../Models/himagesModel')
const joi = require('joi')
// get houseImages start
const GetHimages = async (req, res) => {
  const hellHimages = await HimagesModel.find().populate({
    path: 'userId',
    model: 'Users',
    select: 'username'
  })
  res.send(hellHimages)
}
// get houseImages ended
// get houseImagesById start
const GetHimagesById = async (req, res) => {
  const hellHimages = await HimagesModel.findById(req.params.id).populate({
    path: 'userId',
    model: 'Users',
    select: 'username'
  })
  res.send(hellHimages)
}
// get houseImagesById ended
// post houseImages start
const PostHimages = async (req, res) => {
  try {
    const { error } = himagesValdation(req.body)
    if (error) return res.send(error.message)
    const himagesPosting = new HimagesModel(req.body)
    await himagesPosting.save()
    res.status(201).send({
      status: 'Success',
      message: 'Successfully inserted',
      info: himagesPosting
    })
  } catch (error) {
    res.status(400).send({ status: 'Error', message: error.message })
  }
}
// post houseImages ended
// put/update houseImages start
const PutHimages = async (req, res) => {
  try {
    const himagesUpdating = await HimagesModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: himagesUpdating
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// put/update houseImages ended
// Delete houseImages start
const DeleteHimages = async (req, res) => {
  const deletingById = await HimagesModel.findByIdAndRemove(req.params.id)
  res.send({ status: 'success', message: `this Himages ${deletingById} are Deleted successfully` })
}
// Delete houseImages ended

// validation starts
function himagesValdation (himagesObj) {
  const himagesVal = joi.object({
    houseId: joi.string().required(),
    images: joi.string().required(),
    userId: joi.string().required()

  })
  return himagesVal.validate(himagesObj)
}
// validation ended

exports.GetHimages = GetHimages
exports.GetHimagesById = GetHimagesById
exports.PostHimages = PostHimages
exports.PutHimages = PutHimages
exports.DeleteHimages = DeleteHimages
