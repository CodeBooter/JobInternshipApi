const express =require('express');

const router = express.Router();
const { getInternships,createInternship,getSingleInternship } = require('../controllers/internship_controller');

//internships route
router.route("/internships").get(getInternships);
router.route("/internships/newinternship").post(createInternship);
router.route("/internships/:id").get(getSingleInternship);

module.exports = router;
