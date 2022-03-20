const notesRouter = require('express').Router();
const Note = require('../models/note');

/************************ GET ************************/ 

// Notes
notesRouter.get('/', (request, response) => {
    Note.find({}).then(result => {
        response.json(result);
    });
})

// Note by ID
notesRouter.get('/:id', (request, response, next) => {

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
notesRouter.post('/',(request, response, next) => {
    
    const note = new Note({
        content: request.body.content,
        date: new Date(),
    });
  
    note.save()
        .then(savedNote => {
            response.json(savedNote);
        })
        .catch(error => {
            next(error);
        });
})



/************************ DELETE ************************/ 
// Note by ID
notesRouter.delete('/:id', (request, response) => {
    Note.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end();
        })
        .catch(error =>{
            next(error);
        });
})



module.exports = notesRouter;