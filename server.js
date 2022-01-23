const express = require('express');
const path = require('path');

const app = express();
const PORT = 5500;

app.use(express.static('public'));

//Sends to the homepage if a pathing issue exists
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
});

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  

//Sends notes to the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/notes.html'))
}); 

