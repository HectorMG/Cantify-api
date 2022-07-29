const mongoose = require('mongoose');
const SongSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        minlength: 4
    },
    artist: {
        type: String,
        required: true,
        trim: true,
        minlength: 4
    },
    lyrics: {
        type: String,
        required: true,
        trim: true,
        minlength: 4
    },
    releaseDate: Date
}, {
    timestamps: true
});
module.exports = mongoose.model('Song', SongSchema);