const UsersModel = require("../Models/usersModel");
const bcrypt = require("bcrypt");
require('dotenv').config()
const { LoginValidation } =require('../Controllers/usersController')
const jwt = require('jsonwebtoken')

const Login = async(req, res)=>{
    const { error } = LoginValidation(req.body);
    if (error) return res.status(400).send({error})
    try {
        //soo hel userka xogtiisa adigoo isticmaalayo email kaso statuskissa active yahay

        const user = await UsersModel.findOne({email: req.body.email, status: 'Active'})

        if(!user) return res.status(401).send({error: 'Email not found'})

        const passCheck = await bcrypt.compare(req.body.password,user.password)

        if(!passCheck) return res.status(401).send({error: 'Invalid password'})

        const token = jwt.sign({email:user.email,id:user._id},process.env.PRIVATE_KEY,{expiresIn: '1h'})

        return res.status(200).send({AccessToken: token,Login:true})


    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = Login