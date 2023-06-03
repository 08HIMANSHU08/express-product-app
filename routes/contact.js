
const path = require('path');

const express = require('express');

const router = express.Router();

const contactController = require('../controllers/product')


router.get('/contact',contactController.getContact);

router.post('/contact',contactController.postContact);

module.exports=router;