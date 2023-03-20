const apiRouter = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');


// API ROUTES -------------------------
apiRouter.get('/notes', (req, res) => res.json(db));

apiRouter.post('/notes', (req, res) => {
    // Creates new note object from user input with unique ids
    
    if(req.body.title){
        let userNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
        };

        console.log(userNote.id)
        db.push(userNote);

        res.json(db);
        fs.writeFile('./db/db.json', JSON.stringify(db, null, ' '), (err) => {
            err
                ? console.error(err)
                : console.log('Note posted successfully.')
        });
        
        console.log(db) 
    }

})

apiRouter.delete('/notes/:id', (req, res) => {
    const deleteId = req.params.id
    for(let i = 0; i < db.length; i++){
        if(deleteId === db[i].id){
            db.splice(i, 1);
            fs.writeFile('./db/db.json', JSON.stringify(db, null, ' '), (err) => {
                err
                    ? console.error(err)
                    : console.log('Note posted successfully.')
            });
        }
    }
})

module.exports = apiRouter;