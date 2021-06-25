const ProjectController = require('../controllers/projects.controller');

module.exports = function(app) {
    
    app.get('/api/projects', ProjectController.getAll);

    app.get('/api/projects/:id', ProjectController.getOne);

    app.post('/api/projects', ProjectController.create);

    app.put('/api/projects/:id', ProjectController.update);

    app.delete('/api/projects/:id', ProjectController.delete);

}