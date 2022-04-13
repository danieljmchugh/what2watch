const registerRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const logger = require('../utils/logger');

registerRouter.post('/', async (request, response) => {
    const {emailSignup, nameSignup, passwordSignup} = request.body;

    // test if existing user
    const existingUser = await User.findOne({ email: emailSignup });
    if (existingUser) {
        logger.info('User email already taken', existingUser);
        return response.status(400).json({error: "User with that email already exists"});
    }

    // TODO: Other tests: strong enough password, etc.
    try {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(passwordSignup, saltRounds);
        
        const user = new User({email: emailSignup, name: nameSignup, passwordHash: passwordHash, lists: []});

        const savedUser = user.save();
    
        const userForToken = {
            email: savedUser.email,
            name: savedUser.name,
            id: savedUser._id
        };
    
        const token = jwt.sign(userForToken, process.env.SECRET);
        response.status(201).json({ token, email: user.email, name: user.name });

    } catch (error) {
        logger.error(error);
        response.status(401).json({ error: 'Error signing in' });
    }

});

module.exports = registerRouter;