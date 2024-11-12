import React, { useState } from "react";
import Calender from "../components/Calendar/Calender";
import TaskTable from "../components/Calendar/TaskTable";
import { format } from "date-fns"; // Import date-fns
import LogoutButton from "../components/Buttons/LogoutButton";

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample data for appointments (for demonstration)
  const [appointments, setAppointments] = useState({
    "2024-11-14": [
      {
        time: "10 AM",
        doctor: "Doctor A",
        hospital: "Hospital B",
        // status: "pending",
      },
      {
        time: "10 AM",
        doctor: "Doctor A",
        hospital: "Hospital B",
        // status: "rejected",
      },
      {
        time: "2 PM",
        doctor: "Doctor A",
        hospital: "Hospital B",
        // status: "accepted",
      },
    ],
    "2024-11-16": [
      {
        time: "3 PM",
        doctor: "Doctor A",
        hospital: "Hospital B",
        // status: "accepted",
      },
    ],
    // Add more dates and appointments as needed
  });

  // Handler to change date based on calendar selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Handlers for arrow navigation to change date
  const handlePreviousDay = () => {
    setSelectedDate(
      (prevDate) => new Date(prevDate.setDate(prevDate.getDate() - 1))
    );
  };

  const handleNextDay = () => {
    setSelectedDate(
      (prevDate) => new Date(prevDate.setDate(prevDate.getDate() + 1))
    );
  };

  // Check if there are appointments on a specific day
  const getAppointmentsForDate = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd"); // Use date-fns to format the date
    return appointments[formattedDate] || [];
  };

  // Highlight dates with appointments
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = format(date, "yyyy-MM-dd"); // Format the date in 'yyyy-MM-dd'
      if (appointments[formattedDate]) {
        return "highlighted"; // Add a class for highlighting
      }
    }
    return "";
  };

  return (
    <div className="bg-purple-100 h-screen">
      <LogoutButton />
    <div className="flex flex-col justify-center items-center">
      <div className="text-4xl p-5 bg-purple-400 rounded-lg">
        <h1>Appointment Calendar</h1>
      </div>
      <div className="flex flex-col md:flex-row w-full h-full justify-center items-center gap-10 p-5">
        <div className="w-full md:w-1/3">
          <Calender
            onDateChange={handleDateChange}
            tileClassName={tileClassName} // Pass tileClassName to Calendar
            appointments={appointments} // Pass appointments data to Calendar
          />
        </div>
        <div className="w-full md:w-2/3">
          <TaskTable
            selectedDate={selectedDate}
            onPreviousDay={handlePreviousDay}
            onNextDay={handleNextDay}
            appointments={getAppointmentsForDate(selectedDate)} // Pass appointments for selected date
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default CalendarPage;
