require('dotenv').config()

const PORT = process.env.PORT;
const MONGO_DB_NOTES_URI = process.env.MONGO_DB_NOTES_URI;
const MONGO_DB_USERS_URI = process.env.MONGO_DB_USERS_URI;

module.exports = {
    MONGO_DB_NOTES_URI,
    MONGO_DB_USERS_URI,
    PORT
}