import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary chart components
ChartJS.register(
  CategoryScale,    // Register the category scale
  LinearScale,      // Register the linear scale (for values on the Y axis)
  PointElement,     // Register the point element (for data points)
  LineElement,      // Register the line element
  Title,            // Register the title component
  Tooltip,          // Register the tooltip component
  Legend            // Register the legend component
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
    <div className="flex items-center justify-center flex-col w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-6">Patients Chart</h1>
      <div className="w-full h-64 sm:h-80 md:h-96 flex items-center justify-center">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
}

export default PatientChart;
