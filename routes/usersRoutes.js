const express = require('express')
const router = express.Router()

const usersController = require('../Controllers/usersController')

router.get('/', usersController.GetUsers)

router.get('/:id', usersController.GetUserById)

router.post('/signup', usersController.signup)

router.post('/login', usersController.login)

router.put('/:id', usersController.userUpdate)

router.delete('/:id', usersController.userDelete)

module.exports = router
