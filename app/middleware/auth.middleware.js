const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
  const token =  req.headers["authorization"];

  if (!token) {
    return res.status(403).json({
        message: 'Es requerido un token de autorización'
    })
  }
  try {
    const { id } = jwt.verify(token, "secure");
    req.user = id;
} catch (err) {
    return res.status(401).json({
        message: 'Token no válido'
    })
  }
  return next();
};

module.exports = verificarToken;