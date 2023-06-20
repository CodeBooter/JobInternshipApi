const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: [true, 'Please enter job title'],
        trim: false,
        maxlength: [30, 'Job title cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter job description'],
        trim: false,
        maxlength: [100, 'Job description cannot exceed 1000 characters']
    },
    salary: {
        type: Number,
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
    applylink: {
        type: String,
        required: [true, 'Please enter applylink'],
        trim: false,
        maxlength: [100, 'applylink cannot exceed 100 characters']
    },
    skills: {
        type: [String],
        required: [true, 'Please enter skills'],
        trim: false,
        maxlength: [30, 'skills cannot exceed 100 characters']
    },
    type: {
        type: String,
        required: [true, 'Please enter type'],
        trim: false,
        maxlength: [15, 'type cannot exceed 100 characters']
    },
    image:{
        type: String,
        required: [true, 'Please enter image urls'],
        trim: false,
        maxlength: [100, 'image urls cannot exceed 100 characters']
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
    }



    

});


module.exports = mongoose.model('Job', jobSchema);