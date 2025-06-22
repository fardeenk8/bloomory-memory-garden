const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const emailService = require('../utils/emailService');
const { adminAuth } = require('../middleware/auth');
const { validateContact, validatePagination, validateId } = require('../middleware/validation');

// @route   POST /api/contact/submit
// @desc    Submit contact form
// @access  Public
router.post('/submit', validateContact, async (req, res) => {
  try {
    const { fullName, email, type, subject, message } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    // Create contact submission
    const contact = new Contact({
      fullName,
      email,
      type,
      subject,
      message,
      ipAddress,
      userAgent
    });

    await contact.save();

    // Send confirmation email to user
    const userEmailResult = await emailService.sendContactConfirmation({
      fullName,
      email,
      type,
      subject,
      message
    });

    // Send notification to admin
    const adminEmailResult = await emailService.notifyAdminNewContact({
      fullName,
      email,
      type,
      subject,
      message
    });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully. We will get back to you soon!',
      data: {
        contact: {
          id: contact.id,
          fullName: contact.fullName,
          email: contact.email,
          type: contact.type,
          subject: contact.subject,
          createdAt: contact.createdAt
        },
        confirmationEmailSent: userEmailResult.success,
        adminNotificationSent: adminEmailResult.success,
        emailPreviews: {
          userConfirmation: userEmailResult.previewUrl,
          adminNotification: adminEmailResult.previewUrl
        }
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Contact form submission failed. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   GET /api/contact/submissions
// @desc    Get all contact submissions (admin only)
// @access  Private (Admin)
router.get('/submissions', [adminAuth, validatePagination], async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { status, type, priority } = req.query;
    
    // Build filter
    const filter = {};
    if (status) filter.status = status;
    if (type) filter.type = type;
    if (priority) filter.priority = priority;

    const submissions = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Contact.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: {
        submissions,
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
    console.error('Get contact submissions error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact submissions'
    });
  }
});

// @route   GET /api/contact/stats
// @desc    Get contact form statistics (admin only)
// @access  Private (Admin)
router.get('/stats', adminAuth, async (req, res) => {
  try {
    const totalSubmissions = await Contact.countDocuments();
    const newSubmissionsThisMonth = await Contact.countDocuments({
      createdAt: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) }
    });

    const statusStats = await Contact.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const typeStats = await Contact.aggregate([
      {
        $group: {
          _id: '$type',
          count: { $sum: 1 }
        }
      }
    ]);

    const priorityStats = await Contact.aggregate([
      {
        $group: {
          _id: '$priority',
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalSubmissions,
        newSubmissionsThisMonth,
        statusStats,
        typeStats,
        priorityStats
      }
    });

  } catch (error) {
    console.error('Get contact stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact statistics'
    });
  }
});

// @route   GET /api/contact/:id
// @desc    Get contact submission by ID (admin only)
// @access  Private (Admin)
router.get('/:id', [adminAuth, validateId], async (req, res) => {
  try {
    const submission = await Contact.findOne({ id: req.params.id });

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      data: { submission }
    });

  } catch (error) {
    console.error('Get contact submission by ID error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact submission'
    });
  }
});

// @route   PUT /api/contact/:id/status
// @desc    Update contact submission status (admin only)
// @access  Private (Admin)
router.put('/:id/status', [adminAuth, validateId], async (req, res) => {
  try {
    const { status, priority, notes } = req.body;
    
    if (status && !['new', 'in_progress', 'resolved', 'closed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value'
      });
    }

    if (priority && !['low', 'medium', 'high', 'urgent'].includes(priority)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid priority value'
      });
    }

    const updateData = {};
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    if (notes) updateData.notes = notes;
    if (status === 'resolved' || status === 'closed') {
      updateData.respondedAt = new Date();
    }

    const submission = await Contact.findOneAndUpdate(
      { id: req.params.id },
      updateData,
      { new: true }
    );

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact submission updated successfully',
      data: { submission }
    });

  } catch (error) {
    console.error('Update contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact submission'
    });
  }
});

// @route   DELETE /api/contact/:id
// @desc    Delete contact submission (admin only)
// @access  Private (Admin)
router.delete('/:id', [adminAuth, validateId], async (req, res) => {
  try {
    const submission = await Contact.findOneAndDelete({ id: req.params.id });

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact submission deleted successfully'
    });

  } catch (error) {
    console.error('Delete contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete contact submission'
    });
  }
});

module.exports = router;