const Internship = require('../models/internship_model');

// Create internship and save to database
exports.createInternship = async (req, res) => {
    try {
        const newInternship = await Internship.create(req.body);
        newInternship.save()
        .then(newInternshipSchema => {
            res.status(201).json({
                status: 'success',
                data: {
                    internship: newInternshipSchema
                }
            });
        })
        .catch(err => {
            res.status(400).json({
                status: 'fail',
                message: err
            });
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

// Get all internships
// Get all internships
exports.getInternships= async (req, res) => {
    const internship = await internship.find();

    res.status(200).json({
        status: 'success',
        data: {
            internship
        }
    });

};

