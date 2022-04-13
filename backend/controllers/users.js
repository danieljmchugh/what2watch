const usersRouter = require('express').Router();
const logger = require('../utils/logger');
const utils = require('../utils/utils');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

/************************ GET ALL ************************/ 

usersRouter.get('/', async (request, response) => {
    const body = request.body;
    const token = utils.getToken(request);

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET);
        const user = await User.findById(decodedToken.id);
        
        if(!user) { // TODO: is this still needed?
            return response.status(404).json({error: "Can't post with unauthenticated user"}); 
        }
        response.json(user);
        
    } catch (error) {
        logger.error(error);
        response.status(401).json({ error: 'token missing or invalid' });
    }
    
});

/************************ DELETE ************************/
usersRouter.delete('/:id', (request, response) => {
    User.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end();
        })
        .catch(error =>{
            next(error);
        });
})

module.exports = usersRouter;