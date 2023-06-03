

const path = require('path');

const express = require('express');

const router = express.Router();

const successController = require('../controllers/product')


router.get('/success',successController.getSuccess);

module.exports = router;