const mongoose = require('mongoose');

const database_uri = process.env.MONGO_DB_URI

console.log('connecting to database', database_uri);

mongoose.connect(database_uri)
    .then(result => {
        console.log('connected!');
    })
    .catch(error => {
        console.error('could not connect:', error.message);
        process.exit(1);
    });

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date
});

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Note', noteSchema);
