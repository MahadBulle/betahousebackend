const express = require('express')
const router = express.Router()
// const { ContactModel } = require('../../Models/PagesModels/contactModel')

// const contactController = require('../../Controllers/PagesControllers/contactController')
// const contactController = require('../../Controllers/PagesControllers/contactController')
const {GetContact,GetContactById,PostContact,PutContact,DeleteContact} = require('../../Controllers/PagesControllers/contactController')
const AuthenticateRoute = require('../AuthenticationMiddleware')

router.get('/',AuthenticateRoute(["SuperAdmin","Admin","CustomerCare"]),GetContact)

router.get('/:id',AuthenticateRoute(["SuperAdmin","Admin","CustomerCare"]),GetContactById)

router.post('/', PostContact) 

router.put('/:id',AuthenticateRoute(["SuperAdmin","Admin","CustomerCare"]),PutContact)

router.delete('/:id',AuthenticateRoute(["SuperAdmin","Admin","CustomerCare"]),DeleteContact)


module.exports = router
