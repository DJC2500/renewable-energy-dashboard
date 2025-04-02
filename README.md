# Renewable Energy Dashboard

The Renewable Energy Dashboard is a web application that visualizes solar energy data using NASA's POWER API. The project aims to help users understand solar energy availability by displaying real-time and historical data for specific locations.

# Author

Created by Divine Ciroma.

# Features

Fetches and displays solar energy data from NASA's POWER API

Supports All Sky and Clear Sky solar radiation parameters

Data visualization using Chart.js (line charts)

Handles missing data gracefully

Responsive and user-friendly UI built with React

# Technologies Used

React.js (Frontend UI)

Axios (API requests)

Chart.js (Data visualization)

HTML & CSS (Basic styling and layout)

NASA POWER API (Solar energy data source)

Git & GitHub (Version control)

# Installation & Setup

Clone the repository:

git clone https://github.com/DJC2500/renewable-energy-dashboard.git
cd renewable-energy-dashboard

# Install dependencies:

npm install

Create a .env file to store API configuration:

REACT_APP_NASA_API_URL=https://power.larc.nasa.gov/api/temporal/daily/point

Run the project:

npm start

Open (http://localhost:3000/) in your browser.

# Future Plans

Add support for wind and hydro energy data

Implement region-based filtering for renewable energy sources

Improve UI/UX with interactive charts and maps

Deploy the app using Netlify or Vercel

# License

This project is open-source and available under the MIT License.

