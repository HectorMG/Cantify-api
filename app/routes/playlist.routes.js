module.exports = (app) => {
    const playlist = require('../controllers/playlist.controller')

    // validate Login
    app.post('/api/playlist', playlist.create);

}