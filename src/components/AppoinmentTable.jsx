import React, { useState } from "react";

const appointmentsData = [
  { id: 1, patient: "John Doe", doctor: "Dr. Smith", date: "2024-11-10" },
  { id: 2, patient: "Jane Smith", doctor: "Dr. Johnson", date: "2024-11-11" },
  { id: 3, patient: "Michael Brown", doctor: "Dr. Lee", date: "2024-11-12" },
  // Add more data here
];

function AppointmentTable() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(appointmentsData);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredData(
      appointmentsData.filter((appointment) =>
        appointment.patient.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Search Appointments"
        value={search}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded-lg w-full"
      />
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Patient Name</th>
            <th className="py-2 px-4 border-b text-left">Doctor Name</th>
            <th className="py-2 px-4 border-b text-left">Appointment Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((appointment) => (
            <tr key={appointment.id}>
              <td className="py-2 px-4 border-b">{appointment.patient}</td>
              <td className="py-2 px-4 border-b">{appointment.doctor}</td>
              <td className="py-2 px-4 border-b">{appointment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;
