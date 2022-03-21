const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    }
});

// userSchema.set('toJSON', {
//     transform: (document, returnedObject) =>{
//         returnedObject.id = returnedObject._id.toString();
//         delete returnedObject._id;
//         delete returnedObject.__v;
        
//         // TODO: read about user password storage best practice
//         delete returnedObject.passwordHash;
//     }
// });

const User = mongoose.model('User', userSchema);

module.exports = User;