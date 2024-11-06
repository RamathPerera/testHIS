import React, { useState } from "react";

const patientsData = [
  { id: 1, name: "John Doe", age: 30, hospital: "General Hospital" },
  { id: 2, name: "Jane Smith", age: 25, hospital: "City Medical Center" },
  { id: 3, name: "Michael Brown", age: 40, hospital: "Sunshine Clinic" },
  // Add more data here
];

function PatientTable() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(patientsData);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredData(
      patientsData.filter((patient) =>
        patient.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Search Patients"
        value={search}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded-lg w-full"
      />
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Patient Name</th>
            <th className="py-2 px-4 border-b text-left">Age</th>
            <th className="py-2 px-4 border-b text-left">Hospital</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((patient) => (
            <tr key={patient.id}>
              <td className="py-2 px-4 border-b">{patient.name}</td>
              <td className="py-2 px-4 border-b">{patient.age}</td>
              <td className="py-2 px-4 border-b">{patient.hospital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
