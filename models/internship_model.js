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
        maxlength: [300, 'image urls cannot exceed 300 characters']
    }
    
    
    
});

module.exports = mongoose.model('Internship', internshipSchema);
