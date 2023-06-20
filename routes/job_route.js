
const express = require('express');
const { getJobs,createJob,getSingleJob } = require('../controllers/job_controller');



const router =express.Router();
// jobs route
router.route("/jobs").get(getJobs);
router.route("/jobs/:id").get(getSingleJob);



router.route("/jobs/newjob").post(createJob);




module.exports = router;