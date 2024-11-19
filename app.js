const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.PORT;

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL );
const db = mongoose.connection
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to Mongo :)'))

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true, limit:'1mb'}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('works!')
})

app.listen(port, () => console.log(`App is listening on port ${port} :)`))