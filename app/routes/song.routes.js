module.exports = (app) => {
    const auth = require("../middleware/auth.middleware");

    const songs = require('../controllers/song.controller.js');

    // List all Songs
    app.get('/api/songs', auth, songs.findAll);
    // Get a single Song by id
    app.get('/api/songs/:id', auth, songs.findOne);
}