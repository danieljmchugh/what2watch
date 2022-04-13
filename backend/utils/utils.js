const logger = require('./logger');

const getToken = (request) => {
    const authorization = request.get('authorization');
    
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        return authorization.substring(7);
    }
    logger.error('auth missing')
    return null;
}


module.exports = {
    getToken
}