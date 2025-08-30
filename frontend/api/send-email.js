import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, phone, email, service } = req.body;

  if (!name || !phone || !service) {
    return res.status(400).json({ success: false, message: 'Name, phone, and service are required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'iammrrammorkhandikar@gmail.com',
      subject: `New Appointment Request - ${service}`,
      html: `<div>Patient: ${name}, Phone: ${phone}, Email: ${email || 'N/A'}, Service: ${service}</div>`
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, messageId: info.messageId });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: error.message });
  }
}
