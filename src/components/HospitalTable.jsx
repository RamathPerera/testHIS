import React from "react";

const hospitalsData = [
  { id: 1, name: "General Hospital", location: "New York", doctorsCount: 150, type: "Public", established: 1990 },
  { id: 2, name: "City Medical Center", location: "Los Angeles", doctorsCount: 200, type: "Private", established: 2005 },
  { id: 3, name: "Sunshine Clinic", location: "Chicago", doctorsCount: 50, type: "Private", established: 2010 },
  { id: 4, name: "Mountain View Hospital", location: "Denver", doctorsCount: 120, type: "Public", established: 1985 },
  { id: 5, name: "Springfield Healthcare", location: "Springfield", doctorsCount: 80, type: "Public", established: 2000 },
  // Add more data here
];

function HospitalTable () {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg m-5">
        <div className="w-full flex flex-row justify-end">
            <div className="flex justify-start gap-2 mb-4 w-1/2">
                <input 
                type="text"
                className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
                />
                <button className="px-4 py-2 bg-purple-500 text-white rounded-md">Search</button>
            </div>
            <div className="w-1/2 flex justify-end gap-2">
                <select className="px-4 py-2 border rounded-lg">
                    <option value="">Filter by Type</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <select className="px-4 py-2 border rounded-lg">
                    <option value="">Filter by Location</option>
                    <option value="public">New York</option>
                    <option value="private">Los Angeles</option>
                    <option value="public">Chicago</option>
                    <option value="private">Denver</option>
                    <option value="public">Springfield</option>
                </select>
            </div>
        </div>

        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
            <thead>
                <tr>
                <th className="py-2 px-4 border-b text-left">Hospital Name</th>
                <th className="py-2 px-4 border-b text-left">Location</th>
                <th className="py-2 px-4 border-b text-left">Doctors Count</th>
                <th className="py-2 px-4 border-b text-left">Type</th>
                <th className="py-2 px-4 border-b text-left">Established Year</th>
                </tr>
            </thead>
            <tbody>
                {hospitalsData.map((hospital) => (
                <tr key={hospital.id}>
                    <td className="py-2 px-4 border-b">{hospital.name}</td>
                    <td className="py-2 px-4 border-b">{hospital.location}</td>
                    <td className="py-2 px-4 border-b">{hospital.doctorsCount}</td>
                    <td className="py-2 px-4 border-b">{hospital.type}</td>
                    <td className="py-2 px-4 border-b">{hospital.established}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
  );
};

export default HospitalTable;
