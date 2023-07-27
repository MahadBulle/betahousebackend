const express = require('express')
const router = express.Router()

const homeSettingController = require('../../Controllers/PagesControllers/homeSettingController')
router.get('/', homeSettingController.homeSettingGet)

router.get('/:id', homeSettingController.homeSettingGetById)

router.post('/', homeSettingController.homeSettingPosting)

router.put('/:id', homeSettingController.PutHomeSettting)

module.exports = router
