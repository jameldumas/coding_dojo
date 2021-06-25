const EngineerController = require('../controllers/engineers.controller');

module.exports = function(app) {
    
    app.get('/api/engineers', EngineerController.getAll);

    app.get('/api/engineers/:id', EngineerController.getOne);

    app.post('/api/engineers', EngineerController.create);

    app.put('/api/engineers/:id', EngineerController.update);

    app.delete('/api/engineers/:id', EngineerController.delete);

}