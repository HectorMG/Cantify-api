module.exports = (app) => {
    const songs = require('../controllers/song.controller.js');

    // List all Songs
    app.get('/api/canciones', songs.findAll);
    // Get a single Song by id
    app.get('/api/canciones/:id', songs.findOne);
}