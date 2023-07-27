const HousesModel = require('../Models/housesModel')
const joi = require('joi')
// houses get starts
const GetHouses = async (req, res) => {
  const hellguriyo = await HousesModel.find().populate({
    path: 'userId',
    model: 'Users',
    select: 'username'
  })
  res.send(hellguriyo)
}
// houses get end
// houses getById starts
const GetHouseById = async (req, res) => {
  const hellguri = await HousesModel.findById(req.params.id).populate({
    path: 'userId',
    model: 'Users',
    select: 'username'
  })
  res.send(hellguri)
}
// houses getById ends
// houses post starts
const PostHouses = async (req, res) => {
  try {
    const { error } = HousesValidation(req.body)
    if (error) return res.send(error.message)
    const housesPosting = new HousesModel(req.body)
    await housesPosting.save()
    res.status(201).send({
      status: 'Success',
      message: 'Successfully inserted',
      info: housesPosting
    })
  } catch (error) {
    res.status(400).send({ status: 'Error', message: error.message })
  }
}
// houses post ends
// houses put/update starts
const PutHouses = async (req, res) => {
  try {
    const housesUpdating = await HousesModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: housesUpdating
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// houses put/update ends
// houses Delete starts
const DeleteHouses = async (req, res) => {
  const deletingById = await HousesModel.findByIdAndRemove(req.params.id)
  res.send({ status: 'success', message: `this House ${deletingById} Deleted successfully` })
}
// houses Delete starts
// validation starts
function HousesValidation (HousesObj) {
  const HousesVal = joi.object({
    Type: joi.string().required(),
    Area: joi.string().required(),
    Address: joi.string().required(),
    Age: joi.string().required(),
    Rent: joi.string().required(),
    Rooms: joi.number().required(),
    Toilets: joi.number().required(),
    MasterRoom: joi.string().required(),
    Parking: joi.string().required(),
    Image: joi.string().required(),
    Deposit: joi.string().required(),
    Status: joi.string().required(),
    Description: joi.string().required(),
    userId: joi.string().required()

  })
  return HousesVal.validate(HousesObj)
}
// validation ended

exports.GetHouses = GetHouses
exports.GetHouseById = GetHouseById
exports.PostHouses = PostHouses
exports.PutHouses = PutHouses
exports.DeleteHouses = DeleteHouses
