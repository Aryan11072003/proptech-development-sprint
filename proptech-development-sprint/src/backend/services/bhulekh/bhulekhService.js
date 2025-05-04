// Import the built-in HTTP module
const http = require('http');

// Define the hostname and port where our server will run
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Log the request URL and method
  console.log(`${req.method} ${req.url}`);
  
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Handle different routes
  if (req.url === '/') {
    res.end('Welcome to my Node.js server!');
  } else if (req.url === '/about') {
    res.end('This is the about page.');
  } else if (req.url === '/api') {
    // Example of sending JSON data
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message: 'This is a JSON response',
      timestamp: new Date()
    }));
  } else {
    // Handle 404 - Page not found
    res.statusCode = 404;
    res.end('404 - Page not found');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});