const usersRouter = require('express').Router();
const bcrypt = require('bcrypt');
const logger = require('../utils/logger');

const User = require('../models/user');

/************************ GET ************************/ 
usersRouter.get('/', async (request, response) => {
    const users = await User.find({});
    response.json(users);
});

/************************ POST ************************/
usersRouter.post('/', async (request, response) => {
    const {email, name, password} = request.body;

    // test for existing
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return response.status(400).json({error: "User with that email already exists"});
    }

    
    // TODO: Other tests: strong enough password, etc.


    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const user = new User({email, name, passwordHash});
    // 
    const savedUser = user.save();

    response.status(201).json(savedUser);
});

/************************ DELETE ************************/ 



module.exports = usersRouter;