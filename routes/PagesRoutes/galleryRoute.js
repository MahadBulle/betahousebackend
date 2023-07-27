const express = require('express')
const router = express.Router()

const galleryController = require('../../Controllers/PagesControllers/galleryController')
router.get('/', galleryController.Getgallery)

router.get('/:id', galleryController.GetgalleryById)

router.post('/', galleryController.Postgallery)

router.put('/:id', galleryController.Putgallery)

module.exports = router
