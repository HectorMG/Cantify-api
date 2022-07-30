module.exports = (app) => {
    const playlist = require('../controllers/playlist.controller')

    const auth = require("../middleware/auth.middleware");

    //Create a play list
    app.post('/api/playlist', auth, playlist.create);

    //list all playlist
    app.get('/api/playlist', auth ,playlist.findAll);

     // Get a single playlist by id
     app.get('/api/playlist/:id', auth ,playlist.findOne);

     app.put('/api/playlist/:id', auth ,playlist.update);


}