import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome</h1>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/login')}
            className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition duration-200"
          >
            LOGIN
          </button>
          <button
            onClick={() => navigate('/register')}
            className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition duration-200"
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
