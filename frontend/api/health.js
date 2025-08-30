export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: 'Serverless function is running',
    timestamp: new Date().toISOString()
  });
}
