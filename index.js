// This is the main entry point for the project

// Import necessary modules and libraries
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Use middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Define routes and their handlers
app.get('/', (req, res) => {
  res.send('Welcome! Our goal is to provide users with a comprehensive and easy-to-use tool to help them better manage and organize their work.');
});

// Start the server and listen for incoming requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
