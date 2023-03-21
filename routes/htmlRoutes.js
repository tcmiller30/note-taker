// Establish the Express Router
const htmlRouter = require('express').Router();
// Import Nodejs module for use with file/directory pathing
const path = require('path');

// Sends user to notes.html
htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// Sends user to index.html using a wildcard path
htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Exports router for use in other scripts
module.exports = htmlRouter