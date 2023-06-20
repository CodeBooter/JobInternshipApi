const express = require('express');
const jobRoute = require('./routes/job_route');
const stipendRoute = require('./routes/stipend_route');
const jobScheduler = require('./scheduler/jobScheduler');
const internshipScheduler = require('./scheduler/internshipScheduler');


const app = express();


app.use(express.json());

app.use('/api/v1', jobRoute);



app.use("/api/v1", stipendRoute);

//jobScheduler();
//internshipScheduler();

module.exports = app;