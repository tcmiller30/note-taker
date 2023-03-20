const apiRouter = require('express').Router();
const fs = require('fs');
const notesDb = require('../db/db.json');
const uuid = require('uuid');
const path = require('path');

// Reads db.json and return all saved notes as JSON
apiRouter.get('/api/notes', (req, res) => 
    res.json(notesDb)
);
// API Post Request
    // Receive New Notes, Save to Request Body
    // Add Request to db.json
    // Give note unique ID/uuid
    // return new note to client as res
apiRouter.post('/api/notes', (req, res) => {

    // Receive New Note from user Input
    let userNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    };
})


module.exports = apiRouter;