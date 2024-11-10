import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender({ onDateChange, tileClassName }) {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <Calendar onChange={onDateChange} className="react-calendar" tileClassName={tileClassName} />
      </div>
    </div>
  );
}

export default Calender;
