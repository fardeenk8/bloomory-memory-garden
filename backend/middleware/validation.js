const { body, param, query, validationResult } = require('express-validator');

// Validation middleware to check results
const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map(err => ({
        field: err.path,
        message: err.msg,
        value: err.value
      }))
    });
  }
  next();
};

// User registration validation
const validateUserRegistration = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  
  body('firstName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('First name can only contain letters and spaces'),
  
  body('lastName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Last name can only contain letters and spaces'),
  
  body('userType')
    .isIn(['basic', 'personal', 'partner'])
    .withMessage('User type must be basic, personal, or partner'),
  
  checkValidation
];

// Partner-specific validation
const validatePartnerFields = [
  body('companyName')
    .if(body('userType').equals('partner'))
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Company name must be between 2 and 100 characters'),
  
  body('businessType')
    .if(body('userType').equals('partner'))
    .isIn(['studio', 'vendor', 'planner', 'other'])
    .withMessage('Business type must be studio, vendor, planner, or other'),
  
  body('phone')
    .optional()
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  
  checkValidation
];

// Login validation
const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  
  checkValidation
];

// Newsletter subscription validation
const validateNewsletter = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('source')
    .optional()
    .isIn(['footer', 'about_page', 'pricing_page', 'homepage', 'other'])
    .withMessage('Invalid source specified'),
  
  checkValidation
];

// Contact form validation
const validateContact = [
  body('fullName')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Full name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Full name can only contain letters and spaces'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('type')
    .isIn(['general', 'support', 'partnership', 'feedback', 'other'])
    .withMessage('Invalid contact type'),
  
  body('subject')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Subject cannot exceed 200 characters'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters'),
  
  checkValidation
];

// ID parameter validation
const validateId = [
  param('id')
    .isUUID()
    .withMessage('Invalid ID format'),
  
  checkValidation
];

// Query parameter validation for pagination
const validatePagination = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  
  checkValidation
];

module.exports = {
  checkValidation,
  validateUserRegistration,
  validatePartnerFields,
  validateLogin,
  validateNewsletter,
  validateContact,
  validateId,
  validatePagination
};