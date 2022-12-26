const express = require("express");
const router = express.Router();
const { getProvences } = require("../controllers/provences");

router.route("/").get(getProvences);

module.exports = router;
