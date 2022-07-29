const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 4
    },
    creationDate: Date
}, {
    timestamps: true
});
module.exports = mongoose.model('User', UserSchema);