require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const app = express();  
app.use(express.json());
app.use(cors());

const Note = require('./models/note')

let notes = [
    {
        id: 1,
        content: "Hello there",
        date: "2022-05-30T17:30:31.098Z"
    },
    {
        id: 2,
        content: "So uncivilized",
        date: "2022-05-30T17:30:31.098Z"
    },
    {
        id: 3,
        content: "Only a Sith deals in absolutes",
        date: "2022-05-30T17:30:31.098Z"
    }
]

if (process.argv.length < 3) {
    console.log('USE: node mongo.js <password>');
    process.exit(1);
}

const password = process.argv[2];

/************************ GET ************************/ 

//  Root
app.get('/', (request, response) => {
    console.log(new Date(), ' GET /');
    response.send('<h1>WHAT2WATCH</h1>');
})

// Notes
app.get('/api/notes', (request, response) => {
    console.log(new Date(), ' GET /notes');
    Note.find({}).then(result => {
        response.json(result);
    })
})

// Note by ID
app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id);
    const note = notes.find(note => note.id === id);
    
    if (note) {
        console.log(new Date(), ` GET notes/${note.id}`);
        response.json(note);
    } else {
        response.status(404).end();
    } 
})

/************************ POST ************************/ 
app.post('/api/notes',(request, response) => {
    
    // Without the json-parser, the body property would be undefined
    const body = request.body; 
    
    if (!body.content) {
        return response.status(404).json({
            error: "missing content"
        })
    }

    const note = {
        content: body.content,
        date: new Date(),
        id: uuidv4()
    }

    notes = notes.concat(note);

    console.log(new Date(), ' POST /notes', note);
    response.json(note);
})



/************************ DELETE ************************/ 
// Note by ID
// TODO: Fix Delete as it cant find notes with uuidv4 id number
app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id);
    notes.filter(note => note.id !== id);

    console.log(new Date(), ` DELETE /notes/${request.params.id}`);
    response.status(204).end()
})



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

