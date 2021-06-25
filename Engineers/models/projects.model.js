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

const ProjectsSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [ true, " Your project must have a project name!"],
        minlength: [ 3, "Your project name must have at least 3 characters"],
    },

    projectLead: {
        type: String,
    },

    projectStartDate: {
        type: String,
        required: [ true, " Your project must have a start date!"],
    },
    description: {
        type: String,
        required: [ true, "You must have a description"],
        minlength: [ 10, " Your description must be at least 10 characters long"],
    },
    languagesNeeded: {
        type: [LanguageSchema],
    },
    frameworksNeeded: {
        type: [FrameworksSchema],
        
    },    
},
{ timestamps: true });

const Projects = mongoose.model("Projects", ProjectsSchema);
module.exports = Projects;