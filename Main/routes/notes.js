const route = require('express').route();

const store = require('../db/notes.json');

// requesting existing notes

route.get('../db/notes.json', (req, res) => {
    store
        .pullNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// posting note function route 

route.post('../db/notes.json', (req, res) => {
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


module.exports = route;