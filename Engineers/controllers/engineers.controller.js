const Engineers = require('../models/engineers.model');

module.exports = {
    getAll: (req, res) => {
        Engineers.find( { } )
            .then((allEngineers) => {
                console.log("getAll");
                res.json(allEngineers);
            })
            .catch((err) => {
                console.log("Error in getAll");
                res.status(500).json(err);
            })
    },
    
    getOne: (req, res) => {
        console.log("getOne ID: " + req.params.id);
        Engineers.findById(req.params.id)
            .then((oneEngineer) => {
                console.log("getOne");
                res.json(oneEngineer);
            })
            .catch((err) => {
                console.log("Error in getOne");
                res.status(500).json(err);
            })
    },

    create: (req, res) => {
        console.log(req.body); 
        Engineers.create(req.body)
            .then((newEngineer) => {
                console.log("Create");
                res.json(newEngineer);
            })
            .catch((err) => {
                console.log("Error in Create");
                res.status(500).json(err);
            })
    },

    update: (req, res) => {
        console.log(req.body); 
        Engineers.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true,
        })
            .then((updatedEngineer) => {
                console.log("In Update");
                res.json(updatedEngineer);
            })
            .catch((err) => {
                console.log("Error in Update");
                res.status(500).json(err);
            })

    },

    delete: (req, res) => {
        console.log("delete ID: " + req.params.id);
        Engineers.findByIdAndDelete(req.params.id)
            .then((deletedEngineer) => {
                console.log("In Delete");
                res.json(deletedEngineer);
            })
            .catch((err) => {
                console.log("Error in delete");
                res.status(500).json(err);
            });

    }

}