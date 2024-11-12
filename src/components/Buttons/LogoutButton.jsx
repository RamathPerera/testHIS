import React from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import authService from '../../services/authService';
import Swal from 'sweetalert2'; // Import SweetAlert

function LogoutButton() {
  const navigate = useNavigate();

  // Handle Logout with confirmation
  function handleLogout() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log me out!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        authService.logout(); // Proceed with logout
        navigate('/login'); // Redirect to login
        window.location.reload(); // Reload the page
        Swal.fire('Logged out!', 'You have been logged out successfully.', 'success');
      }
    });
  }

  // Handle Calendar navigation
  function handleCalendar() {
    navigate('/calendar');
  }

  // Handle back navigation
  function handleBack() {
    navigate(-1); // Navigate to the previous page in history
  }

  return (
    <div>
      <div className="text-center p-2 flex items-center justify-end gap-5">
        {/* Calendar Icon Button */}
        <FontAwesomeIcon
          icon={faCalendarDays}
          size="2x"
          className="text-gray-800 mb-2 cursor-pointer"
          onClick={handleCalendar}
        />
        
        {/* Back Button */}
        <button 
          className="w-1/3 lg:w-1/12 bg-gray-500 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 transition duration-200"
          onClick={handleBack}
        >
          BACK
        </button>
        
        {/* Logout Button */}
        <button 
          className="w-1/3 lg:w-1/12 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition duration-200"
          onClick={handleLogout}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default LogoutButton;
