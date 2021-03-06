const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


loginRouter.post('/', async (request, response) => {
    const {emailLogin, passwordLogin} = request.body;

    const user = await User.findOne({ email: emailLogin });
    const passwordCorrect = (user === null) 
        ? false
        : await bcrypt.compare(passwordLogin, user.passwordHash);
    
    // Check credentials
    if (!(user && passwordCorrect)) {
        return response.status(401).json({error : 'invalid email or password'});
    }

    const userForToken = {
        email: user.email,
        name: user.name,
        id: user._id
    };

    const token = jwt.sign(userForToken, process.env.SECRET);

    response.status(200).send({ token, email: user.email, name: user.name });
});


module.exports = loginRouter;