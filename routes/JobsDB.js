const express = require("express");
const router = express.Router();

const {AllFemaleJobs, AllJobs,registerJob} =  require("./../controllers/JobsDB");

router.route("/allfemaleJobs").get(AllFemaleJobs);

router.route("/allJobs").get(AllJobs);

router.route("/registerJob").post(registerJob);
module.exports = router;