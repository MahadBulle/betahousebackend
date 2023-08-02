const express = require('express')
const router = express.Router()
// const { ContactModel } = require('../../Models/PagesModels/contactModel')

// const contactController = require('../../Controllers/PagesControllers/contactController')
// const contactController = require('../../Controllers/PagesControllers/contactController')
const {GetContact,GetContactById,PostContact,PutContact,DeleteContact} = require('../../Controllers/PagesControllers/contactController')
// router.get('/',(req,res) => {

//     res.send("waa uu shaqeenaa hada")
// })
router.get('/',GetContact)

router.get('/:id',GetContactById)

router.post('/', PostContact) 

router.put('/:id',PutContact)

router.delete('/:id',DeleteContact)


module.exports = router
