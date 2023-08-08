const express = require('express')
const router = express.Router()

const usersController = require('../Controllers/usersController')
const AuthenticateRoute = require('./AuthenticationMiddleware')


router.get('/',AuthenticateRoute(["SuperAdmin","Admin"]), usersController.GetUsers)

router.get('/:id',AuthenticateRoute(["SuperAdmin","Admin"]), usersController.GetUserById)

router.post('/signup',AuthenticateRoute(["SuperAdmin"]), usersController.signup)
// router.post('/login', usersController.login)
router.put('/:id',AuthenticateRoute(["SuperAdmin"]), usersController.userUpdate)

router.delete('/:id',AuthenticateRoute(["SuperAdmin"]), usersController.userDelete)

module.exports = router
