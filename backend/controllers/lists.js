const listsRouter = require('express').Router();
const utility = require('../utils/utils');
const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');
const List = require('../models/list');
const User = require('../models/user');

/************************ GET ************************/ 
// Get all
listsRouter.get('/', async (request, response) => {
    const lists = await List.find({});
    if(!lists) {
        return response.status(404).json({error: "No lists can be found"});
    }

    response.json(lists);
})


// Get by id
listsRouter.get('/:id', async (request, response) => {
    // const body = request.body;
    try {
        const list = await List.findById(request.params.id);
        if(!list) {
            return response.status(404).json({error: "List could not be identified"});
        }
        response.json(list);    
    
    } catch (error) {
        logger.error(error);
    }
    
});


/************************ POST ************************/ 
listsRouter.post('/', async (request, response) => {
    const body = request.body;
    const token = utility.getToken(request);

    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' });
    }
    
    const user = await User.findById(decodedToken.id);
    if(!user) { // TODO: is this still needed?
        return response.status(404).json({error: "Can't post with unauthenticated user"}); 
    }
    
    const list = new List({
        title: body.title,
        content: body.content,
        date: new Date(),
        user: user._id
    });

    const savedList = await list.save();
    user.lists = user.lists.concat(savedList._id);
    await user.save();

    response.json(savedList);
});



/************************ DELETE ************************/ 





module.exports = listsRouter;
