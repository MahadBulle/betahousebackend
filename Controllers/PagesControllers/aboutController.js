const { AboutModel, aboutValidation } = require('../../Models/PagesModels/AboutModel')
// get start
const GetAbout = async (req, res) => {
  const hellGetAbout = await AboutModel.find()
  res.status(200).send(hellGetAbout)
}
// get ended
// get ById start
const GetAboutById = async (req, res) => {
  const hellGetAboutById = await AboutModel.findById(req.params.id)
  res.status(200).send(hellGetAboutById)
}
// get ById ended
// post start
const PostAbout = async (req, res, next) => {
  try {
    const { error } = aboutValidation(req.body)
    if (error) return res.status(400).send(error.message)
    const aboutPosting = new AboutModel(req.body)
    await aboutPosting.save()
    res.status(201).send({
      status: true,
      aboutPosting,
      message: 'succefully inserted '
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// post ended
// put/update houseImages start
const PutAbout = async (req, res) => {
  try {
    const AboutUpdating = await AboutModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: AboutUpdating
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// put/update ended
module.exports = {
  GetAbout,
  GetAboutById,
  PostAbout,
  PutAbout
}
