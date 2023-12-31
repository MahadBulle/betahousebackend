const express = require('express');
const {
  gallerygetdata,
  gallerygetbyid,
  gallerypost,
  galleryupdate,
} = require('../../Controllers/PagesControllers/galleryCTRL');
const router = express.Router();
router.get('/', gallerygetdata);
router.get('/:id', gallerygetbyid);
router.post('/', gallerypost);
router.put('/:id', galleryupdate);

module.exports = router;