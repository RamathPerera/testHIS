import React from "react";
import LogoutButton from "./LogoutButton";

const hospitalsData = [
  { id: 1, name: "General Hospital", location: "New York", doctorsCount: 150, type: "Public", established: 1990 },
  { id: 2, name: "City Medical Center", location: "Los Angeles", doctorsCount: 200, type: "Private", established: 2005 },
  { id: 3, name: "Sunshine Clinic", location: "Chicago", doctorsCount: 50, type: "Private", established: 2010 },
  { id: 4, name: "Mountain View Hospital", location: "Denver", doctorsCount: 120, type: "Public", established: 1985 },
  { id: 5, name: "Springfield Healthcare", location: "Springfield", doctorsCount: 80, type: "Public", established: 2000 },
  // Additional data can be added here
];

function HospitalTable() {
  return (
    <div>
        <LogoutButton /> 
        <div className="p-2 bg-white shadow-md rounded-lg m-2"> 
            {/* Search and Filter Section */}
            <div className="w-full flex flex-col sm:flex-row justify-between mb-4 gap-2">
                <div className="flex items-center justify-end sm:justify-start gap-2 w-full sm:w-1/2">
                <input
                    type="text"
                    className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Search Hospitals"
                />
                <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition duration-200">Search</button>
                </div>
                <div className="flex flex-col sm:flex-row justify-end gap-2 w-full sm:w-1/2">
                <select className="px-4 py-2 border rounded-lg">
                    <option value="">Filter by Type</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <select className="px-4 py-2 border rounded-lg">
                    <option value="">Filter by Location</option>
                    <option value="New York">New York</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Denver">Denver</option>
                    <option value="Springfield">Springfield</option>
                </select>
                </div>
            </div>

            {/* Table with Borders */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-purple-700 text-white">
                    <tr>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Hospital ID</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Hospital Name</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Location</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Doctors Count</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Type</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Established Year</th>
                    </tr>
                </thead>
                <tbody>
                    {hospitalsData.map((hospital, index) => (
                    <tr key={hospital.id} className={index % 2 === 0 ? "bg-white" : "bg-purple-100"}>
                        <td className="py-2 px-4 border border-gray-300 text-right">{hospital.id}</td>
                        <td className="py-2 px-4 border border-gray-300">{hospital.name}</td>
                        <td className="py-2 px-4 border border-gray-300">{hospital.location}</td>
                        <td className="py-2 px-4 border border-gray-300 text-right">{hospital.doctorsCount}</td>
                        <td className="py-2 px-4 border border-gray-300">{hospital.type}</td>
                        <td className="py-2 px-4 border border-gray-300 text-right">{hospital.established}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default HospitalTable;
