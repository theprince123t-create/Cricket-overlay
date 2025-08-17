const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the project's root directory
app.use(express.static(path.join(__dirname, '/')));

// Handle the root URL to serve the overlay.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'overlay.html'));
});

// API endpoint to fetch live data from CricHeroes URL
app.get('/live-data', async (req, res) => {
  try {
    const response = await fetch('https://cricheroes.com/_next/data/GWn-9wsDkpg5k-2hvyhaR/scorecard/18754689/individual/jaajssi-vs-jeejej/live.json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from CricHeroes:', error);
    res.status(500).send('Error fetching live data.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
