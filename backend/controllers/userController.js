const { validationResult } = require('express-validator');
const User = require('../models/User');
const { sendMail } = require('../utils/mailer');

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      type: req.body.type || 'personal',
      plan: req.body.plan,
    });
    await user.save();

    await sendMail(
      user.email,
      'Welcome to BloomoryAI',
      '<p>Thank you for registering with BloomoryAI.</p>'
    );

    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.registerPartner = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const partner = new User({
      name: req.body.name,
      email: req.body.email,
      company: req.body.company,
      type: 'partner',
    });
    await partner.save();

    await sendMail(
      partner.email,
      'Welcome Partner',
      '<p>Thank you for partnering with BloomoryAI.</p>'
    );

    res.status(201).json({ message: 'Partner registered', partner });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
