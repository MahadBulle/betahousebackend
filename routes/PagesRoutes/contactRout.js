const express = require('express')
const router = express.Router()
// const { ContactModel } = require('../../Models/PagesModels/contactModel')

// const contactController = require('../../Controllers/PagesControllers/contactController')
// const contactController = require('../../Controllers/PagesControllers/contactController')
const {GetContact,GetContactById,PostContact,PutContact} = require('../../Controllers/PagesControllers/contactController')
// router.get('/',(req,res) => {

//     res.send("waa uu shaqeenaa hada")
// })
router.get('/',GetContact)

router.get('/:id',GetContactById)

router.post('/', PostContact) 

router.put('/:id',PutContact)

module.exports = router
