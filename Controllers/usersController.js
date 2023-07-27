const UsersModel = require('../Models/usersModel')
const joi = require('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// users get starts
const GetUsers = async (req, res) => {
  const hellusers = await UsersModel.find()
  res.send(hellusers)
}
// users get ends
// user getById starts
const GetUserById = async (req, res) => {
  const helluser = await UsersModel.findById(req.params.id)
  res.send(helluser)
}
// usersgetById ends
// signup start
const signup = async (req, res) => {
  try {
    const { error } = usersValidation(req.body)
    if (error) return res.send(error.message)
    const signupPosting = new UsersModel(req.body)
    const { username, email } = req.body
    const checkUserEmail = await UsersModel.findOne({ email })
    const checkUsername = await UsersModel.findOne({ username })
    if (checkUsername) return res.send({ status: 'error', message: 'this Username is already existed' })
    if (checkUserEmail) return res.send({ status: 'error', message: 'this email is already created as a user' })

    const salt = await bcrypt.genSalt(10)
    signupPosting.password = await bcrypt.hash(signupPosting.password, salt)

    await signupPosting.save()
    res.send({
      status: 'Success',
      message: 'Successfully signed up',
      info: signupPosting
    })
  } catch (error) {
    res.send({ status: 'Error', message: error.message })
  }
}
// signup ended
// user Update start
const userUpdate = async (req, res) => {
  try {
    //  await bcrypt.compare(
    //     req.body.password,
    //     UsersModel.password
    // );
    const UserUpdating = await UsersModel.findByIdAndUpdate(req.params._id, req.body, { new: true })
    res.send({
      status: 'Success',
      message: 'Successfully Updated',
      info: UserUpdating
    })
  } catch (error) {
    res.send(error.message)
  }
}
// user Update ended
// user Delete start
const userDelete = async (req, res) => {
  const deletingById = await UsersModel.findByIdAndRemove(req.params.id)
  res.send({ status: 'success', message: `the user ${deletingById} Deleted successfully` })
}
// user Delete ended

// login start
const login = async (req, res) => {
  try {
    const { error } = LoginValidation(req.body)
    if (error) return res.send(error.message)
    const currentUserData = await UsersModel.findOne({ username: req.body.username })
    if (!currentUserData) return res.send({ status: 'Error', message: 'invalid username or password' })

    const validatePassword = await bcrypt.compare(
      req.body.password,
      currentUserData.password
    )
    if (!validatePassword) return res.send({ status: 'Error', message: 'invalid username or password' })

    const token = jwt.sign({ id: currentUserData._id, username: currentUserData.username }, 'MahadBuulle')
    res.header('token', token).json({
      status: 'Success',
      message: 'successfully logged in',
      token
    })
  } catch (error) {
    res.send({ status: 'Error', message: error.message })
  }
}
// login ended
// login validation
function LoginValidation (userObj) {
  const userVal = joi.object({
    username: joi.string(),
    password: joi.string().required()

  })
  return userVal.validate(userObj)
}
// login validation ended
// sign up validation
function usersValidation (usersObj) {
  const usersVal = joi.object({
    username: joi.string().required().min(3).max(10),
    email: joi.string().required().email({ tlds: { allow: false } }).required(),
    password: joi.string().required().min(6).max(20),
    status: joi.string().required(),
    role: joi.string().required()

  })
  return usersVal.validate(usersObj)
}
// sign up validation ended

exports.GetUsers = GetUsers
exports.GetUserById = GetUserById
exports.signup = signup
exports.userUpdate = userUpdate
exports.userDelete = userDelete
exports.login = login
