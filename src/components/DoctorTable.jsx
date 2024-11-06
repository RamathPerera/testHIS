import React from "react";
import LogoutButton from "./LogoutButton";

const doctorsData = [
  { id: 1, name: "Dr. Smith", specialization: "Cardiology", hospital: "General Hospital", experience: 10, contact: "smith@example.com" },
  { id: 2, name: "Dr. Johnson", specialization: "Neurology", hospital: "City Medical Center", experience: 8, contact: "johnson@example.com" },
  { id: 3, name: "Dr. Lee", specialization: "Orthopedics", hospital: "Sunshine Clinic", experience: 12, contact: "lee@example.com" },
  { id: 4, name: "Dr. Brown", specialization: "Pediatrics", hospital: "Mountain View Hospital", experience: 5, contact: "brown@example.com" },
  { id: 5, name: "Dr. Green", specialization: "Oncology", hospital: "Springfield Healthcare", experience: 15, contact: "green@example.com" },
  // Additional data can be added here
];

function DoctorTable() {
  return (
    <div>
        <LogoutButton />
        <div className="p-2 bg-white shadow-md rounded-lg m-2">
            {/* Filter and Search Section */}
            <div className="w-full flex flex-col sm:flex-row justify-between mb-4 gap-2">
                <div className="flex items-center justify-end sm:justify-start gap-2 w-full sm:w-1/2">
                <input
                    type="text"
                    placeholder="Search Doctors"
                    className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
                />
                <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition duration-200">Search</button>
                </div>
                <div className="flex flex-col sm:flex-row justify-end gap-2 w-full sm:w-1/2">
                <select className="px-4 py-2 border rounded-lg">
                    <option value="">Filter by Specialization</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Oncology">Oncology</option>
                </select>
                <select className="px-4 py-2 border rounded-lg">
                    <option value="">Filter by Hospital</option>
                    <option value="General Hospital">General Hospital</option>
                    <option value="City Medical Center">City Medical Center</option>
                    <option value="Sunshine Clinic">Sunshine Clinic</option>
                    <option value="Mountain View Hospital">Mountain View Hospital</option>
                    <option value="Springfield Healthcare">Springfield Healthcare</option>
                </select>
                </div>
            </div>

            {/* Table with Borders */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-purple-700 text-white">
                    <tr>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Doctor ID</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Doctor Name</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Specialization</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Hospital</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Experience (years)</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorsData.map((doctor, index) => (
                    <tr key={doctor.id} className={index % 2 === 0 ? "bg-white" : "bg-purple-100"}>
                        <td className="py-2 px-4 border border-gray-300 text-right">{doctor.id}</td>
                        <td className="py-2 px-4 border border-gray-300">{doctor.name}</td>
                        <td className="py-2 px-4 border border-gray-300">{doctor.specialization}</td>
                        <td className="py-2 px-4 border border-gray-300">{doctor.hospital}</td>
                        <td className="py-2 px-4 border border-gray-300 text-right">{doctor.experience}</td>
                        <td className="py-2 px-4 border border-gray-300">{doctor.contact}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default DoctorTable;
