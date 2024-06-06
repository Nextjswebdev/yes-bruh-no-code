// pages/api/connect-service.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Handle GET requests
    res.status(200).json({ message: 'GET request received' });
  } else if (req.method === 'POST') {
    // Handle POST requests
    const { serviceName, apiKey } = req.body;

    // Implement connection logic based on serviceName and apiKey
    // Example connection logic:
    if (serviceName === 'anas' && apiKey === '1234') {
      console.log(`Connecting to Google Sheets with API Key: ${apiKey}`);
      res.status(200).json({ success: true, message: 'Service connected successfully!' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid service name.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
