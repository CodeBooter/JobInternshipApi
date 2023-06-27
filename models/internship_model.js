const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter internship title'],
        trim: false,
        maxlength: [30, 'Internship title cannot exceed 30 characters']
    },
    imageAssest:{
        type: String,
        required: [true, 'Please enter image urls'],
        trim: false,
        maxlength: [100, 'image urls cannot exceed 100 characters']
    },
    
    stipend: {
        type: Number,
        required: [true, 'Please enter stipend'],
        trim: false,
        maxlength: [10, 'Stipend cannot exceed 10 characters']
    },
    location: {
        type: String,
        required: [true, 'Please enter location'],
        trim: false,
        maxlength: [20, 'Location cannot exceed 20 characters']
    },
   
    applyLink: {
        type: String,
        required: [true, 'Please enter applylink'],
        trim: false,
        maxlength: [100, 'Applylink cannot exceed 100 characters']
    },
    duration: {
        type: String,
        required: [true, 'Please enter duration'],
        trim: false,
        maxlength: [40, 'duration cannot exceed 40 characters']
    },  
    applyBy: {
        type: String,
        required: [true, 'Please enter apply by date'],
        trim: false,
        maxlength: [40, 'applyBy cannot exceed 40 characters']
    },
   
   
    deadline: {
        type: Date,
        required: [true, 'Please enter deadline'],
        trim: false,
        maxlength: [10, 'Deadline cannot exceed 10 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('Internship', internshipSchema);
