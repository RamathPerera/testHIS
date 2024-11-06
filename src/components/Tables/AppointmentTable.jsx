import React from "react";
import LogoutButton from "../Buttons/LogoutButton";

const appointmentsData = [
  { id: 1, patient: "John Doe", doctor: "Dr. Smith", department: "Cardiology", hospital: "General Hospital", date: "2024-11-10" },
  { id: 2, patient: "Jane Smith", doctor: "Dr. Johnson", department: "Orthopedics", hospital: "City Medical Center", date: "2024-11-11" },
  { id: 3, patient: "Michael Brown", doctor: "Dr. Lee", department: "Pediatrics", hospital: "Sunshine Clinic", date: "2024-11-12" },
  { id: 4, patient: "Emily White", doctor: "Dr. Davis", department: "Dermatology", hospital: "General Hospital", date: "2024-11-13" },
  { id: 5, patient: "Chris Green", doctor: "Dr. Clark", department: "Neurology", hospital: "City Medical Center", date: "2024-11-14" },
  // Add more data as needed
];

function AppointmentTable() {
  return (
    <div>
      <LogoutButton />
      <div className="p-2 bg-white shadow-lg rounded-lg m-2">
          {/* Filter Section */}
          <div className="w-full flex flex-col sm:flex-row justify-between mb-4 gap-2">
              <div className="flex items-center justify-end sm:justify-start gap-2 w-full sm:w-1/2">
              <input
                  type="text"
                  placeholder="Search Appointments"
                  className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
              />
              <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition duration-200">Search</button>
              </div>
              <div className="flex justify-end gap-2 w-full sm:w-1/2">
              <select className="px-4 py-2 border rounded-lg">
                  <option value="">Filter by Department</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Neurology">Neurology</option>
              </select>
              <select className="px-4 py-2 border rounded-lg">
                  <option value="">Filter by Hospital</option>
                  <option value="General Hospital">General Hospital</option>
                  <option value="City Medical Center">City Medical Center</option>
                  <option value="Sunshine Clinic">Sunshine Clinic</option>
              </select>
              </div>
          </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-purple-700 text-white">
              <tr>
                <th className="py-2 px-4 border border-gray-300 text-center font-medium">Appointment ID</th>
                <th className="py-2 px-4 border border-gray-300 text-center font-medium">Patient Name</th>
                <th className="py-2 px-4 border border-gray-300 text-center font-medium">Doctor Name</th>
                <th className="py-2 px-4 border border-gray-300 text-center font-medium">Department</th>
                <th className="py-2 px-4 border border-gray-300 text-center font-medium">Hospital</th>
                <th className="py-2 px-4 border border-gray-300 text-center font-medium">Appointment Date</th>
              </tr>
            </thead>
            <tbody>
              {appointmentsData.map((appointment, index) => (
                <tr key={appointment.id} className={index % 2 === 0 ? "bg-white" : "bg-purple-100"}>
                  <td className="py-2 px-4 border border-gray-300 text-right">{appointment.id}</td>
                  <td className="py-2 px-4 border border-gray-300">{appointment.patient}</td>
                  <td className="py-2 px-4 border border-gray-300">{appointment.doctor}</td>
                  <td className="py-2 px-4 border border-gray-300">{appointment.department}</td>
                  <td className="py-2 px-4 border border-gray-300">{appointment.hospital}</td>
                  <td className="py-2 px-4 border border-gray-300 text-right">{appointment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AppointmentTable;
