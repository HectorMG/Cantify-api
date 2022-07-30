const User = require('../models/user.model.js');
const md5 = require("md5");
const jwt = require('jsonwebtoken');


exports.validate = (req, res) => {

    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "User data can not be empty"
        });
    }

    User.findOne({ $and: [{ "username": req.body.username }, { "password": md5(req.body.password) }] })
        .then(user => {
            if (user) {
                const token = jwt.sign(
                    { "id": user.id },
                    "secure",
                    {
                        expiresIn: "2h",
                    }
                );

                res.json({
                    user,
                    token
                })
                //res.status(200).send({ message: "Usuario autenticado correctamente" });
            } else {
                res.status(404).send({ message: "Usuario incorrecto, por favor verificar credenciales" });
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong occurred while retrieving the records."
            });
        });
};