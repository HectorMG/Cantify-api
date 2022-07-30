const mongoose = require('mongoose');

const PlaylistSchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true,
        trim: true
    },
    description:{
        type: String,
        trim: true,
    },
    songs:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Song'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Playlist',PlaylistSchema)