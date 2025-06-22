const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ id: decoded.userId, isActive: true });
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Token is not valid.'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token has expired.'
      });
    }
    
    res.status(401).json({
      success: false,
      message: 'Token is not valid.'
    });
  }
};

const adminAuth = async (req, res, next) => {
  try {
    await auth(req, res, () => {});
    
    if (req.user.userType !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Admin rights required.'
      });
    }
    
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Authentication required.'
    });
  }
};

const partnerAuth = async (req, res, next) => {
  try {
    await auth(req, res, () => {});
    
    if (!['partner', 'admin'].includes(req.user.userType)) {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Partner rights required.'
      });
    }
    
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Authentication required.'
    });
  }
};

module.exports = {
  auth,
  adminAuth,
  partnerAuth
};