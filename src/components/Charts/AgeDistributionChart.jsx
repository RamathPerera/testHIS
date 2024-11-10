// AgeDistributionChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import PropTypes from "prop-types";

// Register the required elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const getAgeDistribution = (data) => {
  const ageGroups = {
    '20-29': 0,
    '30-39': 0,
    '40-49': 0,
    '50-59': 0,
  };

  data.forEach((patient) => {
    if (patient.age >= 20 && patient.age < 30) ageGroups['20-29'] += 1;
    if (patient.age >= 30 && patient.age < 40) ageGroups['30-39'] += 1;
    if (patient.age >= 40 && patient.age < 50) ageGroups['40-49'] += 1;
    if (patient.age >= 50 && patient.age < 60) ageGroups['50-59'] += 1;
  });

  return ageGroups;
};

function AgeDistributionChart({ patientsData }) {
  const ageGroups = getAgeDistribution(patientsData);

  const chartData = {
    labels: Object.keys(ageGroups),
    datasets: [
      {
        label: "Patient Age Distribution",
        data: Object.values(ageGroups),
        backgroundColor: "rgba(99, 102, 241, 0.7)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold text-center">Patient Age Distribution</h2>
      <div className="w-full mx-auto">
        <Bar
          data={chartData}
          options={{ responsive: true, plugins: { legend: { display: false } } }}
        />
      </div>
    </div>
  );
}

AgeDistributionChart.propTypes = {
  patientsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      hospital: PropTypes.string.isRequired,
      condition: PropTypes.string.isRequired,
      admissionDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AgeDistributionChart;
