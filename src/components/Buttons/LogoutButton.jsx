import React from 'react'
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();
    function handleLogout() {
        navigate('/login')
    }
    return (
      <div>
        <div className="text-center p-2 flex items-end justify-end">
            <button className="w-1/3 lg:w-1/12 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition duration-200" onClick={handleLogout}>
                LOGOUT
            </button>
        </div>
      </div>
    )
}

export default LogoutButton
