import React from "react";
import LogoutButton from "./LogoutButton";

const nursesData = [
  { id: 1, name: "Nurse Anna", department: "ICU", hospital: "General Hospital", experience: 5, shift: "Night" },
  { id: 2, name: "Nurse Sarah", department: "Emergency", hospital: "City Medical Center", experience: 3, shift: "Day" },
  { id: 3, name: "Nurse Emma", department: "General Care", hospital: "Sunshine Clinic", experience: 8, shift: "Evening" },
  { id: 4, name: "Nurse Kelly", department: "Pediatrics", hospital: "General Hospital", experience: 6, shift: "Night" },
  { id: 5, name: "Nurse Olivia", department: "Surgery", hospital: "City Medical Center", experience: 4, shift: "Day" },
  // Add more data as needed
];

function NurseTable() {
  return (
    <div>
        <LogoutButton />
        <div className="p-2 bg-white shadow-md rounded-lg m-2">
            {/* Filter Section */}
            <div className="w-full flex flex-col sm:flex-row justify-between mb-4 gap-2">
                <div className="flex items-center justify-end sm:justify-start gap-2 w-full sm:w-1/2">
                <input
                    type="text"
                    placeholder="Search Nurses"
                    className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
                />
                <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition duration-200">Search</button>
                </div>
                <div className="flex justify-end gap-2 w-full sm:w-1/2">
                <select className="px-4 py-2 border rounded-lg">
                    <option value="">Filter by Department</option>
                    <option value="ICU">ICU</option>
                    <option value="Emergency">Emergency</option>
                    <option value="General Care">General Care</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Surgery">Surgery</option>
                </select>
                <select className="px-4 py-2 border rounded-lg">
                    <option value="">Filter by Hospital</option>
                    <option value="General Hospital">General Hospital</option>
                    <option value="City Medical Center">City Medical Center</option>
                    <option value="Sunshine Clinic">Sunshine Clinic</option>
                </select>
                </div>
            </div>

            {/* Table with Borders */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-purple-700 text-white">
                    <tr>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Nurse ID</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Nurse Name</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Department</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Hospital</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Experience (years)</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Shift</th>
                    </tr>
                </thead>
                <tbody>
                    {nursesData.map((nurse, index) => (
                    <tr key={nurse.id} className={index % 2 === 0 ? "bg-white" : "bg-purple-100"}>
                        <td className="py-2 px-4 border border-gray-300 text-right">{nurse.id}</td>
                        <td className="py-2 px-4 border border-gray-300">{nurse.name}</td>
                        <td className="py-2 px-4 border border-gray-300">{nurse.department}</td>
                        <td className="py-2 px-4 border border-gray-300">{nurse.hospital}</td>
                        <td className="py-2 px-4 border border-gray-300 text-right">{nurse.experience}</td>
                        <td className="py-2 px-4 border border-gray-300">{nurse.shift}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default NurseTable;
