module.exports = (app) => {
    const auth = require("../middleware/auth.middleware");

    const songs = require('../controllers/song.controller.js');

    // List all Songs
    app.get('/api/canciones', auth, songs.findAll);
    // Get a single Song by id
    app.get('/api/canciones/:id', auth, songs.findOne);
}