const express = require('express');
const fetch = require('node-fetch'); // Is library ko install karna padega
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '/')));

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
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Live overlay at http://localhost:${port}/overlay.html`);
});
