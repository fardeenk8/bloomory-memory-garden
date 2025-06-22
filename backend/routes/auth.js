const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
  updateProfile,
  changePassword,
  logout
} = require('../controllers/authController');

const { auth } = require('../middleware/auth');
const {
  validateUserRegistration,
  validatePartnerFields,
  validateLogin
} = require('../middleware/validation');

// @route   POST /api/auth/register
// @desc    Register a new user (basic, personal, or partner)
// @access  Public
router.post('/register', [
  validateUserRegistration,
  validatePartnerFields
], registerUser);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', validateLogin, loginUser);

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
router.get('/me', auth, getCurrentUser);

// @route   PUT /api/auth/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', auth, updateProfile);

// @route   PUT /api/auth/password
// @desc    Change user password
// @access  Private
router.put('/password', auth, changePassword);

// @route   POST /api/auth/logout
// @desc    Logout user (client-side token removal)
// @access  Private
router.post('/logout', auth, logout);

module.exports = router;