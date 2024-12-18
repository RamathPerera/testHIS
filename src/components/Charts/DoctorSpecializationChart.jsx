import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary chart components
ChartJS.register(
  ArcElement,  // For Doughnut (Pie) chart segments
  Tooltip,     // Tooltip plugin
  Legend       // Legend plugin
);

// PieChart Component for Doctors by Specialization
function DoctorSpecializationPieChart({ data }) {
  const specializationData = {
    labels: ['Cardiology', 'Pediatrics', 'Surgery', 'Orthopedics', 'Dermatology'],
    datasets: [
      {
        label: 'Doctors by Specialization',
        data: data.specializations, // Array of counts for each specialization
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Custom colors
        hoverBackgroundColor: ['#FF4384', '#36A8EB', '#FFBE56', '#4BC0A0', '#9966FF'], // Hover colors
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg w-full max-w-sm lg:max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-2">Doctors by Specialization</h3>
      <Doughnut data={specializationData} options={{ responsive: true }} />
    </div>
  );
};

// Example usage of the DoctorSpecializationPieChart component
const DoctorSpecializationChart = () => {
  const doctorsData = {
    specializations: [40, 30, 20, 10, 15], // Example data for doctor specializations
  };

  return (
    <div className="flex items-center justify-start flex-col w-full lg:w-1/2 overflow-x-scroll">
      <div className="flex gap-6 items-center justify-start">
        <DoctorSpecializationPieChart data={doctorsData} />
      </div>
    </div>
  );
};

export default DoctorSpecializationChart;
