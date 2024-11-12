import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import Swal from 'sweetalert2'; // Import SweetAlert

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      Swal.fire({
        title: 'Error!',
        text: "Passwords do not match.",
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
      return;
    }
    
    try {
      await authService.register(username, password);
      Swal.fire({
        title: 'Success!',
        text: 'Registration successful! Please log in.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/login'); // Redirect to login after successful registration
      });
    } catch (error) {
      setErrorMessage(error.message);
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Register</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form className="space-y-6" onSubmit={handleRegister}>
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-lg">User Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
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

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 text-lg">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition duration-200">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
