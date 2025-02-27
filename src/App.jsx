import React from 'react';
import './App.css';
import index from './index'
import SolarData from './solarData';  // Correct import path for the SolarData component

function App() {
  return (
    <div className="App">
      <h1>Welcome to Dadavine's Renewable Energy Dashboard</h1>
      <SolarData />  {/* Render the SolarData component */}
    </div>
  );
}
 export default App;
