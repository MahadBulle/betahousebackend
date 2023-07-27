const express = require('express')
const router = express.Router()

const aboutController = require('../../Controllers/PagesControllers/aboutController')
router.get('/', aboutController.GetAbout)

router.get('/:id', aboutController.GetAboutById)

router.post('/', aboutController.PostAbout)

router.put('/:id', aboutController.PutAbout)

module.exports = router
