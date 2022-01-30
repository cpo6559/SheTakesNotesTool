// TODO: Import express
const express = require('express');
const path = require('path');
const fs = require("fs");


// TODO: Import 'terms.json' file
const app = express();
const PORT = 5500;

app.use('/api', index);

// TODO: Initialize app variable
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
    }); 

// posting note function route 

app.post('/notes', (req, res) => {
    console.log(req.body)
    store
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


// // module.exports = app => {

//     // Setup notes variable
//     fs.readFile("db/db.json","utf8", (err, data) => {

//         if (err) throw err;

//         var notes = JSON.parse(data);

//         // API ROUTES
//         // ========================================================
    
   

//         // //notes post route
//         // app.post("/notes", function(req, res) {
//         //     // Receives a new note, adds it to db.json, then returns the new note
//         //     let newNote = req.body;
//         //     notes.push(newNote);
//         //     updateDb();
//         //     return console.log("Added new note: "+newNote.title);
//         // })})
