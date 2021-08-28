const express = require("express");
const router = express.Router();

const {registerApplication, AllApplications} = require("./../controllers/application");

router.route("/allApplications/:userId").get(AllApplications);

// router.route("/allJobs").get(AllJobs);

router.route("/registerApplication").post(registerApplication);
module.exports = router;