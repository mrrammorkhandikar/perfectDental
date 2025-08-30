const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || '-', // Replace with your Gmail
    pass: process.env.EMAIL_PASS || '-'     // Replace with your App Password
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, phone, email, service } = req.body;

    // Validate required fields
    if (!name || !phone || !service) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, phone, and service are required fields' 
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'iammrrammorkhandikar@gmail.com',
      subject: `New Appointment Request - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #2B6CB0; text-align: center;">New Appointment Request</h2>
          <div style="background-color: #f7f7f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Patient Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Service Requested:</strong> ${service}</p>
          </div>
          <div style="background-color: #e6f3ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #2B6CB0;"><strong>Note:</strong> Please contact the patient to confirm the appointment details.</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="text-align: center; color: #666; font-size: 12px;">This email was sent from Perfect32 Dental Clinic website contact form.</p>
        </div>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Appointment request sent successfully!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send appointment request. Please try again later.',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Server is running successfully',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Email service is ready to handle appointment requests');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down server gracefully...');
  process.exit(0);
});