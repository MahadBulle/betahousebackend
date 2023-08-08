const express = require('express')
const router = express.Router()

const ourServicesController = require('../../Controllers/PagesControllers/ourServicesController')
const AuthenticateRoute = require('../AuthenticationMiddleware')
router.get('/', ourServicesController.GetService)

router.get('/:id',AuthenticateRoute(["SuperAdmin","Admin","CustomerCare"]), ourServicesController.GetServiceById)

router.post('/',AuthenticateRoute(["SuperAdmin","Admin","CustomerCare"]), ourServicesController.PostService)

router.put('/:id',AuthenticateRoute(["SuperAdmin","Admin","CustomerCare"]), ourServicesController.PutService)

router.delete('/:id',AuthenticateRoute(["SuperAdmin","Admin","CustomerCare"]), ourServicesController. DeleteService)


module.exports = router
