import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import AddAppointmentPopup from './AddAppointmentPopup';
import { format } from 'date-fns';

function TaskTable({ selectedDate, onPreviousDay, onNextDay, appointments }) {
  const [showPopup, setShowPopup] = useState(false);
  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  // Array for time slots
  const timeSlots = [
    '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
    '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
  ];

  // Get appointments for the selected date
  const appointmentsForSelectedDate = appointments;

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-400'; // Green background for approved appointments
      case 'rejected':
        return 'bg-red-400';   // Red background for rejected appointments
      case 'pending':
        return 'bg-yellow-300'; // Yellow background for pending appointments
      default:
        return 'bg-gray-400';   // Default gray for unrecognized status
    }
  };

  return (
    <div className="w-full h-full bg-custom-gray rounded-lg flex flex-col p-5 gap-6 max-h-96 overflow-y-auto">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-black text-xl font-semibold">Upcoming Appointments</h1>
        <div className="text-black flex flex-row gap-2">
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="2x"
            className="text-gray-800 mb-2 cursor-pointer"
            onClick={onPreviousDay}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            size="2x"
            className="text-gray-800 mb-2 cursor-pointer"
            onClick={onNextDay}
          />
        </div>
      </div>

      {/* Display selected date */}
      <h1 className="text-black text-xl font-bold">
        {format(selectedDate, 'EEE, MMM dd yyyy')}
      </h1>

      {/* Loop through time slots */}
      {timeSlots.map((time, index) => (
        <div key={index}>
          <div
            className="flex flex-row items-center justify-start gap-2 cursor-pointer"
            onClick={handleOpenPopup}
          >
            <h1 className="text-black">{time}</h1>
            {/* Display appointments if they exist */}
            <div className='flex flex-row gap-2 max-w-96 overflow-x-auto'>
            {appointmentsForSelectedDate
              .filter((appointment) => appointment.time === time)
              .map((appointment, idx) => (
                <div key={idx} className={`text-black text-md flex flex-col gap-1 p-5 mb-2 ${getStatusColor(appointment.status)}`}>
                    <div className='flex flex-row'>
                        <h1>Doctor:&nbsp;&nbsp;</h1>{appointment.doctor}
                    </div>
                    <div className='flex flex-row'>
                        <h1>Hospital:&nbsp;&nbsp;</h1>{appointment.hospital}
                    </div>
                    <div className='flex flex-row'>
                        <h1>Status:&nbsp;&nbsp;</h1>{appointment.status}
                    </div>                    
                </div>
              ))}
              </div>
          </div>
          <hr className="border-black" />
        </div>
      ))}

      {/* Popup */}
      {showPopup && <AddAppointmentPopup onClose={handleClosePopup} />}
    </div>
  );
}

export default TaskTable;
