const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve all static files in the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html when visiting the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Travlr Getaways app running at http://localhost:${PORT}`);
});
