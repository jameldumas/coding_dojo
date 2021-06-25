const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema({
    name: String,
    enum: [
        'Delphi',
        'SQL',
        'JavaScript',
        'Java',
        'C#',
        'C++',
        'CSS',
        'R',
        'Ruby',
        'Python',
    ]
})

const FrameworksSchema = new mongoose.Schema({
    name: String,
    enum: [
        'Django',
        'Delphi',
        'Flask',
        'Rails',
        'Spring',
        'SQL',
        'JavaScript',
        'Java',
        'C#',
        'C++',
        'CSS',
        'R',
        'Ruby',
        'MongoDB',
        'Python',
    ]
})

const EngineersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [ true, " You must have a first name"],
        minlength: [ 3, "Your name must have at least 3 characters"],
    },

    lastName: {
        type: String,
        required: [ true, " You must have last name"],
        minlength: [ 1, "Your name must have at least 1 characters"],
    },
    description: {
        type: String,
        required: [ true, "You must have a description"],
        minlength: [ 10, " Your description must be at least 10 characters long"],
    },
    languages: {
        type: [LanguageSchema],
    },
    frameworks: {
        type: [FrameworksSchema],
    },    
},
{ timestamps: true });

const Engineers = mongoose.model("Engineers", EngineersSchema);
module.exports = Engineers;