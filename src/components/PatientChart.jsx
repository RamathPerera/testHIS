import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function PatientChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
    datasets: [
      {
        label: 'Patients',
        data: [16, 24, 80, 75, 61, 108], // Sample data
        fill: false,
        borderColor: 'rgb(168, 85, 247)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Patients per Month',
      },
    },
    scales: {
      x: {
        type: 'category', // Use category scale for the X axis
      },
      y: {
        min: 0, // Set minimum value for the Y-axis
        max: 120, // Set maximum value for the Y-axis
        ticks: {
          stepSize: 20, // Ticks interval on the Y-axis
        },
      },
    },
  };

  // Destroy chart if canvas is reused
  useEffect(() => {
    const chartInstance = chartRef.current.chartInstance;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <h1 className="text-2xl font-semibold mb-6">Patients Chart</h1>
      <div className="chart-container w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12" style={{ minWidth: '400px' }}>
        <div className="w-full">
          <Line ref={chartRef} data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default PatientChart;
