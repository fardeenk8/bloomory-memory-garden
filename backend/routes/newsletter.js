const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');
const emailService = require('../utils/emailService');
const { adminAuth } = require('../middleware/auth');
const { validateNewsletter, validatePagination, validateId } = require('../middleware/validation');

// @route   POST /api/newsletter/subscribe
// @desc    Subscribe to newsletter
// @access  Public
router.post('/subscribe', validateNewsletter, async (req, res) => {
  try {
    const { email, source } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    // Check if email already exists
    const existingSubscription = await Newsletter.findOne({ email });
    
    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return res.status(200).json({
          success: true,
          message: 'Email is already subscribed to our newsletter'
        });
      } else {
        // Reactivate subscription
        existingSubscription.isActive = true;
        existingSubscription.subscribedAt = new Date();
        existingSubscription.unsubscribedAt = undefined;
        existingSubscription.source = source || existingSubscription.source;
        await existingSubscription.save();

        // Send confirmation email
        const emailResult = await emailService.sendNewsletterConfirmation(email);

        return res.status(200).json({
          success: true,
          message: 'Newsletter subscription reactivated successfully',
          data: {
            subscription: existingSubscription,
            emailSent: emailResult.success,
            emailPreview: emailResult.previewUrl
          }
        });
      }
    }

    // Create new subscription
    const subscription = new Newsletter({
      email,
      source: source || 'other',
      ipAddress,
      userAgent
    });

    await subscription.save();

    // Send confirmation email
    const emailResult = await emailService.sendNewsletterConfirmation(email);

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: {
        subscription,
        emailSent: emailResult.success,
        emailPreview: emailResult.previewUrl
      }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Email already subscribed'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Newsletter subscription failed',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   POST /api/newsletter/unsubscribe
// @desc    Unsubscribe from newsletter
// @access  Public
router.post('/unsubscribe', validateNewsletter, async (req, res) => {
  try {
    const { email } = req.body;

    const subscription = await Newsletter.findOne({ email, isActive: true });
    
    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our subscription list'
      });
    }

    subscription.isActive = false;
    subscription.unsubscribedAt = new Date();
    await subscription.save();

    res.status(200).json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    res.status(500).json({
      success: false,
      message: 'Unsubscribe failed'
    });
  }
});

// @route   GET /api/newsletter/subscriptions
// @desc    Get all newsletter subscriptions (admin only)
// @access  Private (Admin)
router.get('/subscriptions', [adminAuth, validatePagination], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { isActive, source } = req.query;
    
    // Build filter
    const filter = {};
    if (isActive !== undefined) filter.isActive = isActive === 'true';
    if (source) filter.source = source;

    const subscriptions = await Newsletter.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Newsletter.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: {
        subscriptions,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total,
          hasNext: page < Math.ceil(total / limit),
          hasPrev: page > 1
        }
      }
    });

  } catch (error) {
    console.error('Get newsletter subscriptions error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch newsletter subscriptions'
    });
  }
});

// @route   GET /api/newsletter/stats
// @desc    Get newsletter statistics (admin only)
// @access  Private (Admin)
router.get('/stats', adminAuth, async (req, res) => {
  try {
    const totalSubscriptions = await Newsletter.countDocuments({ isActive: true });
    const totalUnsubscribed = await Newsletter.countDocuments({ isActive: false });
    
    const sourceStats = await Newsletter.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: '$source',
          count: { $sum: 1 }
        }
      }
    ]);

    const newSubscriptionsThisMonth = await Newsletter.countDocuments({
      subscribedAt: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) },
      isActive: true
    });

    res.status(200).json({
      success: true,
      data: {
        totalSubscriptions,
        totalUnsubscribed,
        newSubscriptionsThisMonth,
        sourceStats
      }
    });

  } catch (error) {
    console.error('Get newsletter stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch newsletter statistics'
    });
  }
});

// @route   DELETE /api/newsletter/:id
// @desc    Delete newsletter subscription (admin only)
// @access  Private (Admin)
router.delete('/:id', [adminAuth, validateId], async (req, res) => {
  try {
    const subscription = await Newsletter.findOneAndDelete({ id: req.params.id });

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Newsletter subscription not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Newsletter subscription deleted successfully'
    });

  } catch (error) {
    console.error('Delete newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete newsletter subscription'
    });
  }
});

module.exports = router;