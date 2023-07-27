const express = require('express')
const router = express.Router()

const housesController = require('../Controllers/housesController')

router.get('/', housesController.GetHouses)

router.get('/:id', housesController.GetHouseById)

router.post('/', housesController.PostHouses)

router.put('/:id', housesController.PutHouses)

router.delete('/:id', housesController.DeleteHouses)

module.exports = router
