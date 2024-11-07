import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

// Data for the Pie Chart (Distribution of doctors by hospital)
const pieData = {
  labels: ["General Hospital", "City Medical Center", "Sunshine Clinic", "Mountain View Hospital", "Springfield Healthcare"], // Hospitals
  datasets: [
    {
      data: [10, 5, 8, 3, 6], // Example data for the number of doctors in each hospital
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Distribution of Doctors by Hospital",
    },
  },
};

function PatientHospitalChart() {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg w-full">
      <h3 className="text-xl font-semibold mb-2">Distribution of Patients by Hospital</h3>
      <Pie data={pieData} options={pieOptions} />
    </div>
  );
}

export default PatientHospitalChart;
