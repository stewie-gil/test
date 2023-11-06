const express = require('express');
const app = express();
const port = 3002; // You can choose a different port if you like

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the test API!');
});

// Define another route for a sample endpoint
app.get('/api/sample', (req, res) => {
  res.json({ message: 'This is a sample endpoint.' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
