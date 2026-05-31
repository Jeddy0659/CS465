const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = 8080;

// Register view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Register routes
const travelRouter = require('./app_server/routes/travel');
app.use('/travel', travelRouter);
app.get('/', (req, res) => {
  res.redirect('/travel');
});
// Start server
app.listen(PORT, () => {
  console.log(`Travlr Getaways app running at http://localhost:${PORT}`);
});