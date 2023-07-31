const express = require('express')
const router = express.Router()

const ourClientController = require('../../Controllers/PagesControllers/ourClientController')
router.get('/', ourClientController.GetClient)

router.get('/:id', ourClientController.GetClientById)

router.post('/', ourClientController.PostClient)

router.put('/:id', ourClientController.PutClient)

router.delete('/:id', ourClientController. DeleteClient)

module.exports = router
