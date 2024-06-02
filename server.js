const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

// Enable CORS for all routes
app.use(cors());

// Define a route that sends data
app.get('/data', (req, res) => {
    res.json({
        name: 'CORS in Node.js',
        language: 'JavaScript',
        server: 'Express.js'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
