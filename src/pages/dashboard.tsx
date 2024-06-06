'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const connectService = async () => {
    console.log('Connecting service:', service, apiKey);
    if (!service || !apiKey) {
      setError('Please enter both Service Name and API Key.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/connect-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serviceName: service, apiKey }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Show success message
        router.push('/dashboard'); // Redirect to dashboard or update state as needed
      } else {
        setError(data.message); // Show error message
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error connecting service:', error);
      setError('Error connecting service. Please try again.');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold">Service Name:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">API Key:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="mt-6">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md"
            onClick={connectService}
            disabled={loading}
          >
            {loading ? 'Connecting...' : 'Connected Service'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
