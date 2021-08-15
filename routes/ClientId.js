const express = require("express");
const router = express.Router();

const {registerClient} =  require("./../controllers/ClientId");
router.route("/registerClient").post(registerClient);
module.exports = router;