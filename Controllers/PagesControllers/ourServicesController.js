const { ServiceModel, serviceValidation } = require('../../Models/PagesModels/ourServicesModel')
// get start
const GetService = async (req, res) => {
  const hellGetService = await ServiceModel.find()
  res.status(200).send(hellGetService)
}
// get ended
// get ById start
const GetServiceById = async (req, res) => {
  const hellGetServiceById = await ServiceModel.findById(req.params.id)
  res.status(200).send(hellGetServiceById)
}
// get ById ended
// post start
const PostService = async (req, res, next) => {
  try {
    const { error } = serviceValidation(req.body)
    if (error) return res.status(400).send(error.message)
    const ServicePosting = new ServiceModel(req.body)
    await ServicePosting.save()
    res.status(201).send({
      status: true,
      ServicePosting,
      message: 'succefully inserted '
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// post ended
// put/update houseImages start
const PutService = async (req, res) => {
  try {
    const ServiceUpdating = await ServiceModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: ServiceUpdating
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// put/update ended

module.exports = {
  GetService,
  GetServiceById,
  PostService,
  PutService
}
