const express = require('express')
const router = express.Router()

const aboutController = require('../../Controllers/PagesControllers/aboutController')
const AuthenticateRoute = require('../AuthenticationMiddleware')
router.get('/', aboutController.GetAbout)

router.get('/:id',AuthenticateRoute(["SuperAdmin","Admin"]), aboutController.GetAboutById)

router.post('/',AuthenticateRoute(["SuperAdmin","Admin"]), aboutController.PostAbout)

router.put('/:id',AuthenticateRoute(["SuperAdmin","Admin"]), aboutController.PutAbout)

module.exports = router
