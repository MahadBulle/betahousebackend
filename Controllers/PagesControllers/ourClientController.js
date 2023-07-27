const { ClientModel, clientvalidation } = require('../../Models/PagesModels/ourClientModel')
// get start
const GetClient = async (req, res) => {
  const hellGetClient = await ClientModel.find()
  res.status(200).send(hellGetClient)
}
// get ended
// get ById start
const GetClientById = async (req, res) => {
  const hellGetClientById = await ClientModel.findById(req.params.id)
  res.status(200).send(hellGetClientById)
}
// get ById ended
// post start
const PostClient = async (req, res, next) => {
  try {
    const { error } = clientvalidation(req.body)
    if (error) return res.status(400).send(error.message)
    const clientPosting = new ClientModel(req.body)
    await clientPosting.save()
    res.status(201).send({
      status: true,
      clientPosting,
      message: 'succefully inserted '
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// post ended
// put/update houseImages start
const PutClient = async (req, res) => {
  try {
    const ClientUpdating = await ClientModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: ClientUpdating
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// put/update ended
module.exports = {
  GetClient,
  GetClientById,
  PostClient,
  PutClient
}
