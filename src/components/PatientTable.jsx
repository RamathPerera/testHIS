import React from "react";
import LogoutButton from "./LogoutButton";

const patientsData = [
  { id: 1, name: "John Doe", age: 30, hospital: "General Hospital", condition: "Flu", admissionDate: "2023-10-10" },
  { id: 2, name: "Jane Smith", age: 25, hospital: "City Medical Center", condition: "Fracture", admissionDate: "2023-09-15" },
  { id: 3, name: "Michael Brown", age: 40, hospital: "Sunshine Clinic", condition: "Diabetes", admissionDate: "2023-10-01" },
  { id: 4, name: "Alice Johnson", age: 32, hospital: "General Hospital", condition: "Asthma", admissionDate: "2023-08-21" },
  { id: 5, name: "Tom Wilson", age: 45, hospital: "City Medical Center", condition: "Heart Disease", admissionDate: "2023-07-19" },
  // Add more data as needed
];

function PatientTable() {
  return (
    <div>
        <LogoutButton />
        <div className="p-2 bg-white shadow-md rounded-lg m-2">
            {/* Filter Section */}
            <div className="w-full flex flex-col sm:flex-row justify-between mb-4 gap-2">
                <div className="flex items-center justify-end sm:justify-start gap-2 w-full sm:w-1/2">
                <input
                    type="text"
                    placeholder="Search Patients"
                    className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg"
                />
                <button className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition duration-200">Search</button>
                </div>
                <div className="flex flex-col sm:flex-row justify-end gap-2 w-full sm:w-1/2">
                <select className="px-4 py-2 border rounded-lg">
                    <option value="">Filter by Hospital</option>
                    <option value="General Hospital">General Hospital</option>
                    <option value="City Medical Center">City Medical Center</option>
                    <option value="Sunshine Clinic">Sunshine Clinic</option>
                </select>
                <select className="px-4 py-2 border rounded-lg">
                    <option value="">Filter by Condition</option>
                    <option value="Flu">Flu</option>
                    <option value="Fracture">Fracture</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Asthma">Asthma</option>
                    <option value="Heart Disease">Heart Disease</option>
                </select>
                </div>
            </div>

            {/* Table with Borders */}
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-purple-700 text-white">
                    <tr>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Patient ID</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Patient Name</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Age</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Hospital</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Condition</th>
                    <th className="py-2 px-4 border border-gray-300 text-center font-medium">Admission Date</th>
                    </tr>
                </thead>
                <tbody>
                    {patientsData.map((patient, index) => (
                    <tr key={patient.id} className={index % 2 === 0 ? "bg-white" : "bg-purple-100"}>
                        <td className="py-2 px-4 border border-gray-300 text-right">{patient.id}</td>
                        <td className="py-2 px-4 border border-gray-300">{patient.name}</td>
                        <td className="py-2 px-4 border border-gray-300 text-right">{patient.age}</td>
                        <td className="py-2 px-4 border border-gray-300">{patient.hospital}</td>
                        <td className="py-2 px-4 border border-gray-300">{patient.condition}</td>
                        <td className="py-2 px-4 border border-gray-300 text-right">{patient.admissionDate}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default PatientTable;
