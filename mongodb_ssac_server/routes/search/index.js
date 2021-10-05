var express = require("express");
var router = express.Router();
const searchController = require("../../controllers/ssac/searchController");

router.get("/", searchController.search);

module.exports = router;
