const Projects = require('../models/projects.model');

module.exports = {
    getAll: (req, res) => {
        Projects.find( { } )
            .then((allProjects) => {
                console.log("getAll");
                res.json(allProjects);
            })
            .catch((err) => {
                console.log("Error in getAll");
                res.status(500).json(err);
            })
    },
    
    getOne: (req, res) => {
        console.log("getOne ID: " + req.params.id);
        Projects.findById(req.params.id)
            .then((oneProject) => {
                console.log("getOne");
                res.json(oneProject);
            })
            .catch((err) => {
                console.log("Error in getOne");
                res.status(500).json(err);
            })
    },

    create: (req, res) => {
        console.log(req.body); 
        Projects.create(req.body)
            .then((newProject) => {
                console.log("Create");
                res.json(newProject);
            })
            .catch((err) => {
                console.log("Error in Create");
                res.status(500).json(err);
            })
    },

    update: (req, res) => {
        console.log(req.body); 
        Projects.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true,
        })
            .then((updatedProject) => {
                console.log("In Update");
                res.json(updatedProject);
            })
            .catch((err) => {
                console.log("Error in Update");
                res.status(500).json(err);
            })

    },

    delete: (req, res) => {
        console.log("delete ID: " + req.params.id);
        Projects.findByIdAndDelete(req.params.id)
            .then((deletedProject) => {
                console.log("In Delete");
                res.json(deletedProject);
            })
            .catch((err) => {
                console.log("Error in delete");
                res.status(500).json(err);
            });
    }
}