import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate(); 
  const handleLogin = () => {
    navigate('/dashboard');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Login</h1>
        
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-lg">User Name</label>
            <input 
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              placeholder="Enter your username"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-lg">Password</label>
            <input 
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          
          <div className="text-center">
            <button className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition duration-200" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
