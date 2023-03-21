// Import Express
const express = require('express');
// Imports Express Request Routers
const apiRouter = require('./routes/apiRoutes');
const htmlRouter = require('./routes/htmlRoutes');
// Designates a Network Port for Express to listen to responses at
const PORT = process.env.PORT || 3001;
// Instantiate Express
const app = express();

// Middleware to access data in JSON and HTML files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Establish paths for Request Routers
app.use('/api', apiRouter);
app.use('/', htmlRouter);

// Listen for requests at given PORT and alerts user
app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);