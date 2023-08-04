const { AboutModel, aboutValidation } = require('../../Models/PagesModels/aboutModel')
// // get start
// const GetAbout = async (req, res) => {
//   const hellGetAbout = await AboutModel.find()
//   res.status(200).send(hellGetAbout)
// }
// // get ended
// get start
const GetAbout = async (req, res) => {
  try {
    const data = await AboutModel.find().sort({ _id: -1 }).limit(1)
    // const data = await aboutModel.find().sort({createdAt:-1}).limit(1)
    res.status(200).send(data)
  } catch (error) {
    res.status(404).send(error.message);
  }
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

    const getabout = await AboutModel.find().sort({ _id: -1 }).limit(1)
    if (!getData) {
      const postabout = await AboutModel(req.body);
      await postabout.save();
      res.status(201).send({ status: true, message: 'successfully saved' });


    } else {

      await AboutModel.findByIdAndUpdate(getData[0]._id, req.body, { new: true });
      res.status(201).send({ status: true, message: 'successfully updated' });

    }


  } 
  catch (error) {
    res.status(404).send(error.message);
  }





  //   const aboutPosting = new AboutModel(req.body)
  //   await aboutPosting.save()
  //   res.status(201).send({
  //     status: true,
  //     aboutPosting,
  //     message: 'succefully inserted '
  //   })
  // } catch (error) {
  //   res.status(400).send(error.message)
  // }
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
