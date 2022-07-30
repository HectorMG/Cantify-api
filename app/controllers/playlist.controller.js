const Playlist = require("../models/playlist.model");

exports.create = (req, res) => {


    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Playlist data can not be empty",
        });
    }

    const playlist = new Playlist({
        name: req.body.name,
        description: req.body.description || null
    });


    playlist
        .save()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Something wrong occurred while creating the record.",
            });
        });
}


exports.findAll = (req, res) => {
    Playlist.find()
        .then(playlists => {
            res.status(200).send(playlists);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong occurred while retrieving the records."
            });
        });
}

exports.findOne = (req,res) =>{
    Playlist.findById(req.params.id).then(playlist => {
        if (!playlist) {
            return res.status(404).send({
                message: "Playlist not found with id:" + req.params.id
            });
        }
        res.status(200).send(playlist);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Playlist not found with id:" + req.params.id
            });
        }
        return res.status(500).send({
            message: "Something wrong ocurred while retrieving the record with id:"
                + req.params.id
        });
    });

}