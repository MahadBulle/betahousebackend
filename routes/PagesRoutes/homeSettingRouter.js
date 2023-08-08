const express = require('express')
const router = express.Router()

const homeSettingController = require('../../Controllers/PagesControllers/homeSettingController')
const AuthenticateRoute = require('../AuthenticationMiddleware')
router.get('/', homeSettingController.homeSettingGet)

router.get('/:id',AuthenticateRoute(["SuperAdmin","Admin"]), homeSettingController.homeSettingGetById)

router.post('/',AuthenticateRoute(["SuperAdmin","Admin"]), homeSettingController.homeSettingPosting)

router.put('/:id',AuthenticateRoute(["SuperAdmin","Admin"]), homeSettingController.PutHomeSettting)

router.delete('/:id',AuthenticateRoute(["SuperAdmin","Admin"]), homeSettingController.deleteHomSet)


module.exports = router
