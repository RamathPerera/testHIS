import React from 'react'
import PatientTable from '../components/Tables/PatientTable'
import PatientHospitalChart from '../components/Charts/PatientHospitalChart'
import PatientConditionChart from '../components/Charts/PatientConditionChart'
import AgeDistributionChart from '../components/Charts/AgeDistributionChart'

const patientsData = [
  { id: 1, name: "John Doe", age: 30, hospital: "General Hospital", condition: "Flu", admissionDate: "2023-10-10" },
  { id: 2, name: "Jane Smith", age: 25, hospital: "City Medical Center", condition: "Fracture", admissionDate: "2023-09-15" },
  { id: 3, name: "Michael Brown", age: 40, hospital: "Sunshine Clinic", condition: "Diabetes", admissionDate: "2023-10-01" },
  { id: 4, name: "Alice Johnson", age: 32, hospital: "General Hospital", condition: "Asthma", admissionDate: "2023-08-21" },
  { id: 5, name: "Tom Wilson", age: 45, hospital: "City Medical Center", condition: "Heart Disease", admissionDate: "2023-07-19" },
];

function PatientPage() {
  return (
    <div>
      <PatientTable />
      <div className="flex flex-col lg:flex-row gap-6 mt-8"> {/* Flexbox layout with gap and margin-top */}
        <div className="w-full lg:w-1/3 flex items-center justify-center p-10"> {/* Full width on small screens, half width on large screens */}
            <PatientHospitalChart />
        </div>
        <div className="w-full lg:w-1/3 flex items-center justify-center p-10"> {/* Full width on small screens, half width on large screens */}
            <PatientConditionChart />
        </div>
        <div className="w-full lg:w-1/3 flex items-center justify-center p-10"> {/* Full width on small screens, half width on large screens */}
            <AgeDistributionChart patientsData={patientsData} />
        </div>
      </div>
    </div>
  )
}

export default PatientPage
