const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

const app = express();

mongoose.Promise = global.Promise;

// Parse requests of content-type - "application/x-www-form-urlencoded"
app.use(bodyParser.urlencoded({ extended: true }));
// Parse requests of content-type - "application/json"
app.use(bodyParser.json());
// Activate the CORS access on all routes
app.use(cors());
// Listening server port
var port = process.env.PORT || 3681;

// Define the routes [4]
////////////////////////////////////////////////////////////////////////

require('./app/routes/playlist.routes.js')(app);
require('./app/routes/song.routes.js')(app);
require('./app/routes/user.routes.js')(app);

app.get("/", (req, res) => {
  res.json({
    message: "Servicio Cantify",
  });
});


// Start the server with selected configuration [5]
////////////////////////////////////////////////////////////////////////

mongoose
  .connect(dbConfig.url, dbConfig.options)
  .then(() => {
    console.log("Conexion a base de datos: exitosa");
  })
  .catch((err) => {
    console.log("Conexion a base de datos: falló: " + err);
    process.exit();
  });

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
