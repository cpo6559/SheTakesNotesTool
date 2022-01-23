const express = require('express');
const path = require('path');
const fs = require("fs");


const app = express();
const PORT = 5500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));


// index.html --> homepage 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// Listner
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  


// notes --> notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})
