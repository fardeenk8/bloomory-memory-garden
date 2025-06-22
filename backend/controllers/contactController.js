const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { sendMail } = require('../utils/mailer');

exports.sendMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      message: req.body.message,
    });
    await contact.save();

    await sendMail(
      req.body.email,
      'BloomoryAI Inquiry Received',
      '<p>We have received your message and will respond shortly.</p>'
    );

    await sendMail(
      process.env.CONTACT_RECEIVER || process.env.EMAIL_FROM,
      'New Contact Inquiry',
      `<p>${contact.name} (${contact.email}) sent a message:</p><p>${contact.message}</p>`
    );

    res.status(201).json({ message: 'Message sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
