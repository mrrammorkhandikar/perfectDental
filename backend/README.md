# Perfect32 Dental Clinic - Email Backend

This backend service handles email functionality for the Perfect32 dental clinic website contact form.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email Settings

1. Copy the example environment file:
   ```bash
   copy .env.example .env
   ```

2. Edit the `.env` file with your Gmail credentials:
   ```
   EMAIL_USER=iammrrammorkhandikar@gmail.com
   EMAIL_PASS=Void@123
   PORT=3001
   ```

### 3. Gmail App Password Setup

**Important:** You need to use a Gmail App Password, not your regular password.

1. Enable 2-Factor Authentication on your Gmail account
2. Go to your Google Account settings
3. Navigate to Security → 2-Step Verification → App passwords
4. Generate a new app password for "Mail"
5. Use this 16-character password in your `.env` file

### 4. Start the Server

```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### POST /api/send-email
Sends appointment request emails to the clinic.

**Request Body:**
```json
{
  "name": "Patient Name",
  "phone": "+1234567890",
  "email": "patient@email.com",
  "service": "General Dentistry"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Appointment request sent successfully!",
  "messageId": "email-message-id"
}
```

### GET /api/health
Health check endpoint to verify server status.

## Email Template

The service sends formatted HTML emails to `iammrrammorkhandikar@gmail.com` with:
- Patient contact information
- Requested service
- Professional styling
- Clear call-to-action for the clinic staff

## Security Notes

- Never commit your `.env` file to version control
- Use App Passwords instead of regular Gmail passwords
- The server includes CORS configuration for frontend integration
- All email data is validated before processing

## Troubleshooting

1. **"Invalid login" error**: Make sure you're using an App Password, not your regular Gmail password
2. **CORS errors**: Ensure the frontend is running on the expected port
3. **Email not sending**: Check your Gmail account security settings and App Password configuration