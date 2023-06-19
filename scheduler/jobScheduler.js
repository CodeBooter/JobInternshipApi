const cron = require('node-cron');
const jobController = require('../controllers/job_controller');

// Schedule the job deletion to run every second
function jobScheduler(){
  cron.schedule('* * * * * *', () => {
    jobController.deleteExpiredJobs();
  });
}
module.exports = jobScheduler;

