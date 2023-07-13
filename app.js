const express = require('express');
const cookieParser = require("cookie-parser");
const jobRoute = require('./routes/job_route');
const stipendRoute = require('./routes/stipend_route');
// const DSAroute=require('./routes/DSA_routes');

//const userRoute=require('./routes/user_route');
const jobScheduler = require('./scheduler/jobScheduler');



const app = express();


app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', jobRoute);
app.use("/api/v1", stipendRoute);
// app.use("api/v1",DSAroute);

//app.use("/api/v1",userRoute);

//jobScheduler();
//internshipScheduler();

module.exports = app;