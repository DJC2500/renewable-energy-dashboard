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

// solarDataChart

// import React from 'react';
// import SolarDataChart from './solarData';

// const App = () => {
//   return (
//     <div>
//       <h1>Welcome to Dadavine's Renewable Energy Dashboard</h1>
//       <SolarDataChart />
//     </div>
//   );
// };

 export default App;
