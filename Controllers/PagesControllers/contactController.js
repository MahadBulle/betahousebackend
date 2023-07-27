const { ContactModel, contactValidation } = require('../../Models/PagesModels/ContactModel')
// get start
const GetContact = async (req, res) => {
  // res.send("hello iam contact")
  try {
    const hellGetContact = await ContactModel.find()
    res.status(200).send(hellGetContact)
  } catch (error) {
    res.send({ errors: error })
  }
}
// get ended
// get ById start
const GetContactById = async (req, res) => {
  try {
    const hellGetContactById = await ContactModel.findById(req.params.id)
    res.status(200).send(hellGetContactById)
  } catch (error) {
    res.send({ errors: error })
  }
}
// get ById ended
// post start
const PostContact = async (req, res, next) => {
  try {
    const { error } = contactValidation(req.body)
    if (error) return res.status(400).send(error.message)
    const contactPosting = new ContactModel(req.body)
    await contactPosting.save()
    res.status(201).send({
      status: true,
      contactPosting,
      message: 'succefully inserted '
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// post ended
// put/update houseImages start
const PutContact = async (req, res) => {
  try {
    const ContactUpdating = await ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: ContactUpdating
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// put/update ended
module.exports = {
  GetContact,
  GetContactById,
  PostContact,
  PutContact
}
