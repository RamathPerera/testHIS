import React, { useState } from "react";

const nursesData = [
  { id: 1, name: "Nurse Anna", department: "ICU", hospital: "General Hospital" },
  { id: 2, name: "Nurse Sarah", department: "Emergency", hospital: "City Medical Center" },
  { id: 3, name: "Nurse Emma", department: "General Care", hospital: "Sunshine Clinic" },
  // Add more data here
];

function NurseTable() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(nursesData);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredData(
      nursesData.filter((nurse) =>
        nurse.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Search Nurses"
        value={search}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded-lg w-full"
      />
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">Nurse Name</th>
            <th className="py-2 px-4 border-b text-left">Department</th>
            <th className="py-2 px-4 border-b text-left">Hospital</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((nurse) => (
            <tr key={nurse.id}>
              <td className="py-2 px-4 border-b">{nurse.name}</td>
              <td className="py-2 px-4 border-b">{nurse.department}</td>
              <td className="py-2 px-4 border-b">{nurse.hospital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NurseTable;
