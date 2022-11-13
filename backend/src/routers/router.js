var express = require("express");
var router = express.Router();

// Import Routers
const Routers = require("./files.router");
// Use Routers
router.use("/files", Routers);

module.exports = router;
