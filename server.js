const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const db = require('./db/db.json');



const PORT = process.env.POORT || 3001;

// const apiRouter = require('./routes/apiRoutes');
// const htmlRouter = require('./routes/htmlRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use('/api', apiRouter);
// app.use('/',htmlRouter);

// HTML ROUTES ------------------------
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});



// API ROUTES -------------------------
app.get('/api/notes', (req, res) => res.json(db));

app.post('/api/notes', (req, res) => {
    // Creates new note object from user input with unique ids
    
    if(req.body.title){
        let userNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
        };

        console.log(userNote.id)
        db.push(userNote);
        console.log(db);

        res.json(db);
        fs.writeFile('./db/db.json', JSON.stringify(db, null, '\n'), (err) => {
            err
                ? console.error(err)
                : console.log('Note posted successfully.')
        });
        
        console.log(db) 
    }

})

app.delete('/api/notes/:id', (req, res) => {
    const deleteId = req.params.id
    for(let i = 0; i < db.length; i++){
        if(deleteId === db[i].id){
            db.splice(i, 1);
            console.log(db)
            fs.writeFile('./db/db.json', JSON.stringify(db, null, '\n'), (err) => {
                err
                    ? console.error(err)
                    : console.log('Note posted successfully.')
            });
        }
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);