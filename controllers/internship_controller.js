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
    const internships = await Internship.find();

    res.status(200).json({
        
            internships
        
    });

};

// get internship with id
exports.getSingleInternship = async (req, res) => {
    try {
      const internship = await Internship.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        data: {
          internship
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };

  exports.deleteExpiredInternships = async () => {
    try {
      const currentDate = new Date();
      console.log(currentDate)
      const result = await Internship.deleteMany({ deadline: { $lt: currentDate } });
      console.log('Expired Internships deleted successfully.', result);
    } catch (err) {
      console.error('Failed to delete expired Inyternhsips:', err);
    }
  };
  
