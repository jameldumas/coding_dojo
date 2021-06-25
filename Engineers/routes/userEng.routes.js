const userEngineerController = require("../controllers/userEng.controller");

module.exports = (app) => {
    app.post("/api/userEngineer/register", userEngineerController.register);
    app.post("/api/userEngineer/login", userEngineerController.login);
    app.post("/api/userEngineer/logout", userEngineerController.logout);
};