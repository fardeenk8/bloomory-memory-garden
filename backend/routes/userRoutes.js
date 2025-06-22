const express = require('express');
const { body } = require('express-validator');
const {
  registerUser,
  registerPartner,
} = require('../controllers/userController');

const router = express.Router();

router.post(
  '/register',
  [body('name').notEmpty(), body('email').isEmail(), body('type').notEmpty()],
  registerUser
);

router.post(
  '/partner',
  [body('name').notEmpty(), body('email').isEmail(), body('company').notEmpty()],
  registerPartner
);

module.exports = router;
