const express = require('express')
const router = express.Router()

const ourClientController = require('../../Controllers/PagesControllers/ourClientController')
const AuthenticateRoute = require('../AuthenticationMiddleware')
router.get('/', ourClientController.GetClient)

router.get('/:id', ourClientController.GetClientById)

router.post('/',AuthenticateRoute(["SuperAdmin","Admin"]), ourClientController.PostClient)

router.put('/:id',AuthenticateRoute(["SuperAdmin","Admin"]), ourClientController.PutClient)

router.delete('/:id',AuthenticateRoute(["SuperAdmin","Admin"]), ourClientController. DeleteClient)

module.exports = router
