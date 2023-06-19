const express =require('express');

const router = express.Router();
const { getInternships,createInternship } = require('../controllers/internship_controller');

//internships route
router.route("/internships").get(getInternships);
router.route("/internships/newinternship").post(createInternship);

module.exports = router;
