const job = require('../models/job_model');
// const {newJobSchema} = require('../models/job_model');
//create job and save to database
exports.createJob = async (req, res) => {
    try {
        const newJob = await job.create(req.body);
        newJob.save()
        .then(newJobSchema=>{
            res.status(201).json({
                status: 'success',
                data: {
                    job: newJobSchema
                }
            });
        })
        . catch(err=>{
            res.status(400).json({
                status: 'fail',
                message: err
            });
        });
        
}
catch(err){
    res.status(400).json({
        status: 'fail',
        message: err
    });
}
}




//get all jobs

exports.getJobs = async (req, res) => {
    try{
    const jobs = await job.find();

    res.status(200).json({
        status: 'success',
        data: {
            jobs
        }
    });
}
catch(err){
    res.status(400).json({
        status: 'fail',
        message: err
    });

}  
}

//get single job
exports.getSingleJob = async (req, res) => {
    try {
      const job1 = await job.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        data: {
          job1
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };

  // exports.getSingleJob = async (req, res) => {
    
  //     const job1 = await job.findById(req.params.id);
  //     if(!job1){
  //       return res.status(400).json({
  //               status: 'fail',
  //                 message: err
  //              });
  //     }
  //     res.status(200).json({
  //       status: 'found',
  //         job1,
  //      });

     
  //   } 
  





exports.deleteExpiredJobs = async () => {
  try {
    const currentDate = new Date();
    console.log(currentDate)
    const result = await job.deleteMany({ deadline: { $lt: currentDate } });
    console.log('Expired jobs deleted successfully.', result);
  } catch (err) {
    console.error('Failed to delete expired jobs:', err);
  }
};


