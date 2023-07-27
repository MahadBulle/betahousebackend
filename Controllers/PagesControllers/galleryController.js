const { GalleryModel, galleryvalidation } = require('../../Models/PagesModels/GalleryModel')
// get start
const Getgallery = async (req, res) => {
  const hellGallery = await GalleryModel.find()
  res.status(200).send(hellGallery)
}
// get ended
// get ById start
const GetgalleryById = async (req, res) => {
  const hellGetgalleryById = await GalleryModel.findById(req.params.id)
  res.status(200).send(hellGetgalleryById)
}
// get ById ended
// post start
const Postgallery = async (req, res, next) => {
  try {
    const { error } = galleryvalidation(req.body)
    if (error) return res.status(400).send(error.message)
    const galleryPosting = new GalleryModel(req.body)
    await galleryPosting.save()
    res.status(201).send({
      status: true,
      galleryPosting,
      message: 'succefully inserted '
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// post ended
// put/update houseImages start
const Putgallery = async (req, res) => {
  try {
    const galleryUpdating = await GalleryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: galleryUpdating
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// put/update ended
module.exports = {
  Getgallery,
  GetgalleryById,
  Postgallery,
  Putgallery
}
