const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const bookingController = require('../controllers/bookingController');

// Store files in /tmp (Cloudinary will handle upload)
const upload = multer({ dest: '/tmp/' });

router.post('/book', upload.single('receipt'), bookingController.bookTest);

module.exports = router;
