const express = require('express');
const { body } = require('express-validator');
const { sendMessage } = require('../controllers/contactController');

const router = express.Router();

router.post(
  '/',
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('type').notEmpty(),
    body('message').notEmpty(),
  ],
  sendMessage
);

module.exports = router;
