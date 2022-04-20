const config = require('./utils/config');
const express = require('express');
const app = express();  
const cors = require('cors');
const mongoose = require('mongoose');

const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const registerRouter = require('./controllers/register');
const listsRouter = require('./controllers/lists');

const middleware = require('./utils/middleware');
const logger = require('./utils/logger');

logger.info('connecting to', config.MONGO_DB_URI);

mongoose.connect(config.MONGO_DB_URI)
    .then(() => {
        logger.info('connected to database');
    })
    .catch(error => {
        logger.error('error connecting to database', error.message);
    });



app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);

app.use('/api/lists', listsRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);


module.exports = app;