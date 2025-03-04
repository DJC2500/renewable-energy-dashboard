import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';  // Import Line component for chart
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SolarData = () => {
  const [solarData, setSolarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchSolarData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data); // Log full response for debugging
        setSolarData(response.data.properties.parameter);
      } catch (error) {
        setError("Error fetching data from NASA API");
      } finally {
        setLoading(false);
      }
    };

    fetchSolarData();
  }, []);

  // Function to handle missing data (-999)
  const formatData = (value) => (value === -999 ? null : value); // Handle missing data

  // Prepare chart data once solar data is fetched
  const chartData = solarData ? {
    labels: ['Feb 3, 2024', 'Feb 4, 2024'], // Date labels for x-axis
    datasets: [
      {
        label: 'All Sky',
        data: [
          formatData(solarData.ALLSKY_SFC_SW_DWN['20240203']),
          formatData(solarData.ALLSKY_SFC_SW_DWN['20240204']),
        ], // Data for All Sky
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Clear Sky',
        data: [
          formatData(solarData.CLRSKY_SFC_SW_DWN['20240203']),
          formatData(solarData.CLRSKY_SFC_SW_DWN['20240204']),
        ], // Data for Clear Sky
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  } : null; // Ensure chartData is null until data is fetched

  return (
    <div>
      <h2>Solar Energy Data</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : solarData ? (
        <div>
          <p>Feb 3, 2024 (All Sky): {formatData(solarData.ALLSKY_SFC_SW_DWN?.["20240203"])} kWh/m²</p>
          <p>Feb 4, 2024 (All Sky): {formatData(solarData.ALLSKY_SFC_SW_DWN?.["20240204"])} kWh/m²</p>
          <p>Feb 3, 2024 (Clear Sky): {formatData(solarData.CLRSKY_SFC_SW_DWN?.["20240203"])} kWh/m²</p>
          <p>Feb 4, 2024 (Clear Sky): {formatData(solarData.CLRSKY_SFC_SW_DWN?.["20240204"])} kWh/m²</p>
        </div>
      ) : (
        <p>No data available.</p>
      )}

      {/* Render the chart only if the chartData is available */}
      {chartData && <Line data={chartData} />}
    </div>
  );
};

export default SolarData;