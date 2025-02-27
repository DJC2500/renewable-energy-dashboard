import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const formatData = (value) => (value === -999 ? "Data not available" : `${value} kWh/m²`);

  return (
    <div>
      <h2>Solar Energy Data</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : solarData ? (
        <div>
          <p>Feb 3, 2024 (All Sky): {formatData(solarData.ALLSKY_SFC_SW_DWN?.["20240203"])}</p>
          <p>Feb 4, 2024 (All Sky): {formatData(solarData.ALLSKY_SFC_SW_DWN?.["20240204"])}</p>
          <p>Feb 3, 2024 (Clear Sky): {formatData(solarData.CLRSKY_SFC_SW_DWN?.["20240203"])}</p>
          <p>Feb 4, 2024 (Clear Sky): {formatData(solarData.CLRSKY_SFC_SW_DWN?.["20240204"])}</p>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};
const chartData = {
  labels: ['Feb 3, 2024', 'Feb 4, 2024'],
  datasets: [
    {
      label: 'All Sky',
      data: [5, 6], // Hardcoded values for testing
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1,
    },
    {
      label: 'Clear Sky',
      data: [4, 5], // Hardcoded values for testing
      fill: false,
      borderColor: 'rgba(153, 102, 255, 1)',
      tension: 0.1,
    },
  ],
};

export default SolarData;


