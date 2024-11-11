"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';  // Import the Bar chart instead of Line
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define chart data and options for TypeScript
const data = {
  labels: ['2020', '2021', '2022', '2023', '2024'], // Example years
  datasets: [
    {
      label: 'Revenue (in Millions)',
      data: [50, 100, 150, 200, 250], // Example revenue data
      backgroundColor: 'rgba(34, 197, 94, 0.6)', // Tailwind 'green-500' color
    },
    {
      label: 'Profit (in Millions)',
      data: [20, 50, 80, 120, 160], // Example profit data
      backgroundColor: 'rgba(59, 130, 246, 0.6)', // Tailwind 'blue-500' color
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Company Financials (2020-2024)',
    },
  },
};

export default function Financials() {
  return (
    <div className='container max-w-7xl mx-auto py-12 px-4'>
    <h2 className="md:text-xl text-base font-bold mb-4">Financials of the Company</h2>
      <p className='text-gray-500 md:text-base text-sm'>This chart shows the financial performance of the company over the last few years in terms of revenue and profit.</p>
      <Bar data={data} options={options} />
    </div>
  );
}
