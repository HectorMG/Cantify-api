module.exports = (app) => {
    const playlist = require('../controllers/playlist.controller')

    //Create a play list
    app.post('/api/playlist', playlist.create);

    //list all playlist
    app.get('/api/playlist',playlist.findAll);

     // Get a single playlist by id
     app.get('/api/playlist/:id',playlist.findOne);

     app.put('/api/playlist/:id',playlist.update);


}