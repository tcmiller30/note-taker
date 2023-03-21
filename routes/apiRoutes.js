// Establish the Express Router
const apiRouter = require('express').Router();
// Import Node Module Dependices
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// Import db.json
const db = require('../db/db.json');

// Reads and returns saved notes as a JSON file
apiRouter.get('/notes', (req, res) => res.json(db));

// Allows user to post/save new notes to the db.json
apiRouter.post('/notes', (req, res) => {
    // user can only post/save their note when the note has a title and text
    if(req.body.title && req.body.text){
        // Creates new note obj using user input/req body to push to JSON
        let userNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
        };

        // Adds new note to the database json
        db.push(userNote);

        
        fs.writeFile('./db/db.json', JSON.stringify(db, null, ' '), (err) => {
            err
                ? console.error(err)
                : res.json(db);
                  console.log('Note posted successfully.')
        });
        
        console.log(db) 
    }

})
// deletes a note entry designated by the user
apiRouter.delete('/notes/:id', (req, res) => {
    // deleteId = id of note selected for deletion
    const deleteId = req.params.id
    // iterates through db.json to check for the index with a matching id
    for(let i = 0; i < db.length; i++){
        if(deleteId === db[i].id){
            // Removes indexed object from db.json
            db.splice(i, 1);
            // Overwrites db.json with updated json file
            fs.writeFile('./db/db.json', JSON.stringify(db, null, ' '), (err) => {
                err
                    ? console.error(err)
                    : res.json(db);
                      console.log('Note deleted successfully.')
            });
        }
    }
})

// Exports router for use in other scripts
module.exports = apiRouter;