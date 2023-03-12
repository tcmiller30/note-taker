const apiRouter = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Reads db.json and return all saved notes as JSON
apiRouter.get('/api/notes', (req, res) => {

})

// API Post Request
    // Receive New Notes, Save to Request Body
    // Add Request to db.json
    // Give note unique ID/uuid
    // return new note to client as res
apiRouter.post('/api/notes', (req, res) => {

})


module.exports = apiRouter;