const { validationResult } = require('express-validator');
const Newsletter = require('../models/Newsletter');
const { sendMail } = require('../utils/mailer');

exports.subscribe = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email } = req.body;
    const entry = new Newsletter({ email });
    await entry.save();

    await sendMail(
      email,
      'Newsletter Subscription',
      '<p>Thank you for subscribing to BloomoryAI!</p>'
    );

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
