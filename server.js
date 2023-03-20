const express = require('express');


const apiRouter = require('./routes/apiRoutes');
const htmlRouter = require('./routes/htmlRoutes');



const PORT = process.env.POORT || 3001;

// const apiRouter = require('./routes/apiRoutes');
// const htmlRouter = require('./routes/htmlRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use('/api', apiRouter);
// app.use('/',htmlRouter);

app.use('/api', apiRouter);
app.use('/', htmlRouter);




app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);