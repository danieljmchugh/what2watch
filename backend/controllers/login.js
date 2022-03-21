const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { use } = require('./users');

loginRouter.post('/', async (request, response) => {
    const {email, password} = request.body;

    const user = await User.findOne({ email });
    const passwordCorrect = (user === null) 
        ? false
        : await bcrypt.compare(password, user.passwordHash);
    
    // Check credentials
    if (!(user && passwordCorrect)) {
        return response.status(401).json({error : 'invalid email or password'});
    }

    const userForToken = {
        email: user.email,
        id: user._id
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    response.status(200).send({ token, email: user.email });
});


module.exports = loginRouter;