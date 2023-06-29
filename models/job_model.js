const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please enter job title'],
        trim: false,
        maxlength: [30, 'Job title cannot exceed 100 characters']
    },
    imageAssest:{
        type: String,
        required: [true, 'Please enter image urls'],
        trim: false,
        maxlength: [300, 'image urls cannot exceed 300 characters']
    },
    
    stipend: {
        type: String,
        required: [true, 'Please enter stipend'],
        trim: false,
        maxlength:[10, 'salary cannot exceed 10 characters'],

    },
    location: {
        type: String,
        required: [true, 'Please enter location'],
        trim: false,
        maxlength: [20, 'location cannot exceed 100 characters']
    },
    company: {
        type: String,
        required: [true, 'Please enter company name'],
        trim: false,
        maxlength: [20, 'company name cannot exceed 100 characters']
    },
    applyLink: {
        type: String,
        required: [true, 'Please enter applylink'],
        trim: false,
        maxlength: [100, 'applylink cannot exceed 100 characters']
    },
    duration: {
        type: String,
        required: [true, 'Please enter duration'],
        trim: false,
        maxlength: [40, 'duration cannot exceed 40 characters']
    },
    
   
   
    deadline: {
        type: Date,
        required: [true, 'Please enter deadline'],
        trim: false,
        maxlength: [10, 'deadline cannot exceed 100 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    


    

});


module.exports = mongoose.model('Job', jobSchema);