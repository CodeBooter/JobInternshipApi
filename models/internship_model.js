const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter internship title'],
        trim: false,
        maxlength: [30, 'Internship title cannot exceed 30 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter internship description'],
        trim: false,
        maxlength: [100, 'Internship description cannot exceed 1000 characters']
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
    company: {
        type: String,
        required: [true, 'Please enter company name'],
        trim: false,
        maxlength: [20, 'Company name cannot exceed 20 characters']
    },
    applylink: {
        type: String,
        required: [true, 'Please enter applylink'],
        trim: false,
        maxlength: [100, 'Applylink cannot exceed 100 characters']
    },
    skills: {
        type: [String],
        required: [true, 'Please enter skills'],
        trim: false,
        maxlength: [30, 'Skills cannot exceed 30 characters']
    },
    type: {
        type: String,
        required: [true, 'Please enter type'],
        trim: false,
        maxlength: [15, 'Type cannot exceed 15 characters']
    },
    image: {
        type: String,
        required: [true, 'Please enter image URLs'],
        trim: false,
        maxlength: [100, 'Image URLs cannot exceed 100 characters']
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
