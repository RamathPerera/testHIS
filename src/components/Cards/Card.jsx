import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Card = ({ icon, title, count, link }) => {
    const navigate = useNavigate();

    function handleNavigation() {
        navigate(link);
    }

    return (
        <div
            className='bg-purple-300 w-full sm:w-1/2 lg:w-1/6 p-5 rounded-lg shadow-lg flex flex-col items-center text-gray-700 cursor-pointer hover:bg-purple-500 transition duration-200'
            onClick={handleNavigation}
        >
            <FontAwesomeIcon icon={icon} size="2x" className="text-gray-800 mb-2" />
            <h1 className="text-2xl font-semibold">{title}</h1>
            <h3 className="text-lg font-medium">{count}</h3>
        </div>
    );
};

export default Card;
