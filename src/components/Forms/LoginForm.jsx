import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await authService.login(username, password);
      navigate('/dashboard');
      window.location.reload();
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Login</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-lg">User Name</label>
            <input 
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg "
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-lg">Password</label>
            <input 
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="text-center">
            <button type="submit" className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition duration-200">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
