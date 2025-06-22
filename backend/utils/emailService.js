const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    this.transporter = null;
    this.initializeTransporter();
  }

  async initializeTransporter() {
    try {
      // Create Ethereal test account for development
      const testAccount = await nodemailer.createTestAccount();
      
      this.transporter = nodemailer.createTransporter({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      console.log('✅ Ethereal Email configured for testing');
      console.log(`📧 Test email user: ${testAccount.user}`);
      
    } catch (error) {
      console.error('❌ Failed to setup email service:', error);
    }
  }

  async sendWelcomeEmail(userEmail, userName, userType) {
    try {
      const emailTemplates = {
        basic: {
          subject: 'Welcome to BloomoryAI - Start Preserving Your Memories!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4F46E5;">Welcome to BloomoryAI, ${userName}!</h2>
              <p>Thank you for joining BloomoryAI - the AI-powered memory preservation platform.</p>
              <p>With your <strong>Free Account</strong>, you can:</p>
              <ul>
                <li>Upload and organize your precious memories</li>
                <li>Access basic AI-powered memory insights</li>
                <li>Connect with family and friends</li>
              </ul>
              <p>Ready to get started? <a href="${process.env.FRONTEND_URL}" style="color: #4F46E5;">Visit your dashboard</a></p>
              <p>Best regards,<br>The BloomoryAI Team</p>
            </div>
          `
        },
        personal: {
          subject: 'Welcome to BloomoryAI Personal - Your Memory Journey Begins!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4F46E5;">Welcome to BloomoryAI Personal, ${userName}!</h2>
              <p>Thank you for choosing our <strong>Personal Plan ($6.99/year)</strong>!</p>
              <p>Your enhanced features include:</p>
              <ul>
                <li>Unlimited memory uploads</li>
                <li>Advanced AI memory analysis</li>
                <li>Priority support</li>
                <li>Enhanced privacy controls</li>
              </ul>
              <p>Start exploring: <a href="${process.env.FRONTEND_URL}" style="color: #4F46E5;">Access your account</a></p>
              <p>Best regards,<br>The BloomoryAI Team</p>
            </div>
          `
        },
        partner: {
          subject: 'Welcome to BloomoryAI Partners - Let\'s Grow Together!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4F46E5;">Welcome to BloomoryAI Partners, ${userName}!</h2>
              <p>Thank you for joining our <strong>Professional Partner Program ($24.99/year)</strong>!</p>
              <p>Your partnership benefits include:</p>
              <ul>
                <li>Access to partner dashboard</li>
                <li>Client management tools</li>
                <li>White-label solutions</li>
                <li>Dedicated partner support</li>
                <li>Revenue sharing opportunities</li>
              </ul>
              <p>Get started: <a href="${process.env.FRONTEND_URL}/partners" style="color: #4F46E5;">Access partner portal</a></p>
              <p>Best regards,<br>The BloomoryAI Partnership Team</p>
            </div>
          `
        }
      };

      const template = emailTemplates[userType] || emailTemplates.basic;

      const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
        to: userEmail,
        subject: template.subject,
        html: template.html
      };

      const info = await this.transporter.sendMail(mailOptions);
      
      // Log the preview URL for Ethereal Email
      console.log('📧 Welcome email sent successfully');
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
      return {
        success: true,
        messageId: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info)
      };
      
    } catch (error) {
      console.error('❌ Failed to send welcome email:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async sendNewsletterConfirmation(email) {
    try {
      const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject: 'Successfully Subscribed to BloomoryAI Newsletter',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4F46E5;">Newsletter Subscription Confirmed!</h2>
            <p>Thank you for subscribing to the BloomoryAI newsletter.</p>
            <p>You'll receive updates about:</p>
            <ul>
              <li>New features and improvements</li>
              <li>Memory preservation tips</li>
              <li>AI technology insights</li>
              <li>Community stories and highlights</li>
            </ul>
            <p>Stay connected with us on social media for daily updates!</p>
            <p>Best regards,<br>The BloomoryAI Team</p>
            <hr>
            <small style="color: #666;">
              You can unsubscribe at any time by replying to this email.
            </small>
          </div>
        `
      };

      const info = await this.transporter.sendMail(mailOptions);
      
      console.log('📧 Newsletter confirmation sent successfully');
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
      return {
        success: true,
        messageId: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info)
      };
      
    } catch (error) {
      console.error('❌ Failed to send newsletter confirmation:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async sendContactConfirmation(contactData) {
    try {
      const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
        to: contactData.email,
        subject: 'Message Received - BloomoryAI Support',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4F46E5;">Thank you for contacting BloomoryAI!</h2>
            <p>Hi ${contactData.fullName},</p>
            <p>We've received your message and will get back to you within 24-48 hours.</p>
            
            <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #4F46E5; margin: 20px 0;">
              <h4>Your Message:</h4>
              <p><strong>Type:</strong> ${contactData.type}</p>
              ${contactData.subject ? `<p><strong>Subject:</strong> ${contactData.subject}</p>` : ''}
              <p><strong>Message:</strong> ${contactData.message}</p>
            </div>
            
            <p>In the meantime, feel free to explore our <a href="${process.env.FRONTEND_URL}" style="color: #4F46E5;">platform</a> or check out our <a href="${process.env.FRONTEND_URL}/blog" style="color: #4F46E5;">blog</a> for the latest updates.</p>
            
            <p>Best regards,<br>The BloomoryAI Support Team</p>
          </div>
        `
      };

      const info = await this.transporter.sendMail(mailOptions);
      
      console.log('📧 Contact confirmation sent successfully');
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
      return {
        success: true,
        messageId: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info)
      };
      
    } catch (error) {
      console.error('❌ Failed to send contact confirmation:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async notifyAdminNewContact(contactData) {
    try {
      const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_FROM,
        subject: `New Contact Form Submission - ${contactData.type}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #DC2626;">New Contact Form Submission</h2>
            
            <div style="background: #f8f9fa; padding: 15px; border: 1px solid #ddd; margin: 20px 0;">
              <h4>Contact Details:</h4>
              <p><strong>Name:</strong> ${contactData.fullName}</p>
              <p><strong>Email:</strong> ${contactData.email}</p>
              <p><strong>Type:</strong> ${contactData.type}</p>
              ${contactData.subject ? `<p><strong>Subject:</strong> ${contactData.subject}</p>` : ''}
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background: #fff3cd; padding: 15px; border: 1px solid #ffeaa7; margin: 20px 0;">
              <h4>Message:</h4>
              <p>${contactData.message}</p>
            </div>
            
            <p><small>This is an automated notification from BloomoryAI contact form.</small></p>
          </div>
        `
      };

      const info = await this.transporter.sendMail(mailOptions);
      
      console.log('📧 Admin notification sent successfully');
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
      return {
        success: true,
        messageId: info.messageId,
        previewUrl: nodemailer.getTestMessageUrl(info)
      };
      
    } catch (error) {
      console.error('❌ Failed to send admin notification:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// Create singleton instance
const emailService = new EmailService();

module.exports = emailService;