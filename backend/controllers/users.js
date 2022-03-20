const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();

const User = require('../models/user');

/************************ GET ************************/ 

/************************ POST ************************/
usersRouter.post('/', async (request, response) => {
    const {email, passord} = request.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(passord, saltRounds);

    const user = new User({email, passwordHash});

    const savedUser = user.save();

    response.status(201).json(savedUser);
});

/************************ DELETE ************************/ 



module.exports = usersRouter;