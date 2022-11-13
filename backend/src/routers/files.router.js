var express = require("express");
var router = express.Router();

const Controller = require("../controllers/files.controller");

router.route("/data").get(Controller.get);
router.route("/list").get(Controller.getList);

module.exports = router;
