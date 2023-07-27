const express = require('express')
const router = express.Router()

const himagesController = require('../Controllers/himagesController')

router.get('/', himagesController.GetHimages)

router.get('/:id', himagesController.GetHimagesById)

router.post('/', himagesController.PostHimages)

router.put('/:id', himagesController.PutHimages)

router.delete('/:id', himagesController.DeleteHimages)

module.exports = router
