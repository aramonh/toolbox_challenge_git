const express = require("express");
const app = express();

// Middlewares Imports
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

// Custom Imports
const { handleError } = require("./middlewares/handleError.middleware");

const router = require("./routers/router");

const SERVER_HOST = "0.0.0.0"
const SERVER_PORT = "8000"

//-----MIDDLEWARES------
// Log Request
app.use(morgan("tiny"));
// Secure http Headers
app.use(helmet());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// parse coockies
app.use(cookieParser())
// Cors - cors() -> Enable all cors requests
app.use(cors())
// handle Error
app.use(handleError)

app.use(function(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});
//-----ROUTERS-----
// Configuracion global de rutas
app.get('/', (req, res) => {
  res.send('SERVER ON');
});
app.use("/", router);
//-----SERVER-----
// Start Server
app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(`Server listening on => ( http://localhost:${SERVER_PORT}/ )`);
});

module.exports = app;