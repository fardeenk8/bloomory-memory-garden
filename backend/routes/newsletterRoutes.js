const express = require('express');
const { body } = require('express-validator');
const { subscribe } = require('../controllers/newsletterController');

const router = express.Router();

router.post('/', [body('email').isEmail()], subscribe);

module.exports = router;
