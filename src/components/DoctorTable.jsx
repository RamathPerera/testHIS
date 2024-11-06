import React, { useState } from "react";

const doctorsData = [
  { id: 1, name: "Dr. Smith", specialization: "Cardiology", hospital: "General Hospital" },
  { id: 2, name: "Dr. Johnson", specialization: "Neurology", hospital: "City Medical Center" },
  { id: 3, name: "Dr. Lee", specialization: "Orthopedics", hospital: "Sunshine Clinic" },
  // Add more data here
];

function DoctorTable() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(doctorsData);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredData(
      doctorsData.filter((doctor) =>
        doctor.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Search Doctors"
        value={search}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded-lg w-full"
      />
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Doctor Name</th>
            <th className="py-2 px-4 border-b text-left">Specialization</th>
            <th className="py-2 px-4 border-b text-left">Hospital</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((doctor) => (
            <tr key={doctor.id}>
              <td className="py-2 px-4 border-b">{doctor.name}</td>
              <td className="py-2 px-4 border-b">{doctor.specialization}</td>
              <td className="py-2 px-4 border-b">{doctor.hospital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTable;
