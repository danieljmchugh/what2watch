require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();  
app.use(express.json());
app.use(cors());
app.use(express.static('build'));
const Note = require('./models/note');

/************************ Middleware ************************/ 
const requestLogger = (request, response, next) => {
    console.log(new Date());
    console.log('Method: ', request.method);
    console.log('Path: ', request.path);
    console.log('Body: ', request.body);
    console.log('---');

    next();
}

app.use(requestLogger);

/************************ GET ************************/ 

//  Root
app.get('/', (request, response) => {
    
    response.send('<h1>WHAT2WATCH</h1>');
})

// Notes
app.get('/api/notes', (request, response) => {
    Note.find({}).then(result => {
        response.json(result);
    })
})

// Note by ID
app.get('/api/notes/:id', (request, response, next) => {
    // console.log(typeof(request.params.id));

    Note.findById(request.params.id)
        .then(result => {
            if (result) {
                response.send(result);
            } else {
                response.status(404).end();
            }
        })
        .catch(error => {
            next(error);
        });
})

/************************ POST ************************/ 
app.post('/api/notes',(request, response) => {
    
    const body = request.body

    if (body.content === undefined) {
        return response.status(400).json({ error: 'content missing' })
    }
  
    const note = new Note({
        content: body.content,
        
        date: new Date(),
    })
  
    note.save().then(savedNote => {
        response.json(savedNote)
    })
})



/************************ DELETE ************************/ 
// Note by ID
app.delete('/api/notes/:id', (request, response) => {
    Note.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end();
        })
        .catch(error =>{
            next(error);
        });

})





const unknownEndpoint = (request, response) => {
    response.status(404).send({ error : 'unknown endpoint' });
}


const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } 
  
    next(error)
}


app.use(unknownEndpoint);
app.use(errorHandler); // this has to be the last loaded middleware.

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

