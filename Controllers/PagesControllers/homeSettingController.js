const HomeSettingModel = require('../../Models/PagesModels/homeSettingModel')
const joi = require('joi')
// get start
const homeSettingGet = async (req, res) => {
  try {
    const data = await HomeSettingModel.find().sort({ _id:-1 }).limit(1)
    res.status(200).send(data)
  } catch (error) {
    res.status(404).send(error.message);
  }
}
// const homeSettingGet = async (req, res) => {
//   const hellhomeSetting = await HomeSettingModel.find().sort({ _id: -1 }).limit(1)
  
//   res.status(200).send(hellhomeSetting)
// }
// get ended
// get ById start
const homeSettingGetById = async (req, res) => {
  const hellhomeSettingGetById = await HomeSettingModel.findById(req.params.id)
  res.status(200).send(hellhomeSettingGetById)
}
// get ById ended


// const homeSettingPosting = async (req, res, next) => {
//   try {
//     const { error } = homeSettingValidation(req.body);
//     if (error) return res.status(400).send(error.message);
//     const homesettGet = await HomeSettingModel.find()
//       .sort({ _id: -1 })
//       .limit(1);
//     if (homesettGet) {
//       const updateData = await HomeSettingModel.findByIdAndUpdate(
//         homesettGet[0]._id,
//         req.body,
//         { new: true }
//       );
//       res.status(200).send(updateData);
//     } else {
//       const postdata = await HomeSettingModel(req.body);
//       await postdata.save();
//       res.status(201).send({
//         status: true,
//         postdata,
//         message: 'succefully posted company info',
//       });
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

const homeSettingPosting = async (req, res, next) => {
  try {
    const { error } = homeSettingValidation(req.body)
    if (error) return res.status(400).send(error.message)

    const getData = await HomeSettingModel.find().sort({ _id: -1 }).limit(1)
    if (!getData) {
      const postHome = await HomeSettingModel(req.body);
      await postHome.save();
      res.status(201).send({ status: true, message: 'successfully saved' });


    } else {

      await HomeSettingModel.findByIdAndUpdate(getData[0]._id, req.body, { new: true });
      res.status(201).send({ status: true, message: 'successfully updated' });

    }


  } 
  catch (error) {
    res.status(404).send(error.message);
  }
}


// // post start
// const homeSettingPosting = async (req, res, next) => {
//   try {
//     const { error } = homeSettingValidation(req.body)
//     if (error) return res.status(400).send(error.message)
//     const homeSettingPosting = new HomeSettingModel(req.body)
//     await homeSettingPosting.save()
//     res.status(201).send({
//       status: true,
//       homeSettingPosting,
//       message: 'succefully inserted company information'
//     })
//   } catch (error) {
//     res.status(400).send(error.message)
//   }
// }
// // post ended
// put/update houseImages start
const PutHomeSettting = async (req, res) => {
  try {
    const HomeSettting = await HomeSettingModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).send({
      status: 'Success',
      message: 'Successfully Updated',
      info: HomeSettting
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
// put/update ended
// Delete homeSetting start
const deleteHomSet = async (req, res) => {
  const deletingById = await HomeSettingModel.findByIdAndRemove(req.params.id)
  res.send({ status: 'success', message: `this Home Setting ${deletingById} is Deleted successfully` })
}
// Delete homeSetting ended
// validation starts
function homeSettingValidation (HomeSetttingObj) {
  const HomeSetttingVal = joi.object({
    Title: joi.string().required(),
    name: joi.string().required(),
    location: joi.string().required(),
    logo: joi.string().required(),
    email: joi.string().email().required(),
    Complaint_Email: joi.string().email().required(),
    Complaint_Phone: joi.number().required(),
    facebook: joi.string().required(),
    tiktok: joi.string().required(),
    twitter: joi.string().required(),
    instagram: joi.string().required(),
    HeroTitle: joi.string().required(),
    HeroDescription: joi.string().required(),
    heroImage: joi.string().required(),
    footerText: joi.string().required(),
    // userId: joi.string().required()
  })
  return HomeSetttingVal.validate(HomeSetttingObj)
}
// validation ended
module.exports = {
  homeSettingGet,
  homeSettingGetById,
  homeSettingPosting,
  PutHomeSettting,
  deleteHomSet
}
