const express = require('express')
const router = express.Router()

const housesController = require('../Controllers/housesController')
const AuthenticateRoute = require('./AuthenticationMiddleware')

router.get('/', housesController.GetHouses)

router.get('/:id', housesController.GetHouseById)

router.post('/',AuthenticateRoute(["Admin"]), housesController.PostHouses)

router.put('/:id',AuthenticateRoute(["Admin"]), housesController.PutHouses)

router.delete('/:id',AuthenticateRoute(["Admin"]), housesController.DeleteHouses)

module.exports = router
