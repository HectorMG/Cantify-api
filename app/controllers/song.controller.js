const Song = require('../models/song.model.js');

// Retrieve and list all Songs
exports.findAll = (req, res) => {
    console.log(req.user);
    Song.find()
        .then(songs => {
            res.status(200).send(songs);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong occurred while retrieving the records."
            });
        });
};

// Get a single Song by its id
exports.findOne = (req, res) => {
    Song.findById(req.params.id)
        .then(song => {
            if (!song) {
                return res.status(404).send({
                    message: "Song not found with id:" + req.params.id
                });
            }
            res.status(200).send(song);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Song not found with id:" + req.params.id
                });
            }
            return res.status(500).send({
                message: "Something wrong ocurred while retrieving the record with id:"
                    + req.params.id
            });
        });
};