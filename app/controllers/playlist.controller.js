const Playlist = require("../models/playlist.model");

exports.create = (req,res) =>{


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