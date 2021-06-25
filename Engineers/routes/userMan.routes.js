const userManagerController = require("../controllers/manager.controller");

module.exports = (app) => {
    app.post("/api/userManager/register", userManagerController.register);
    app.post("/api/userManager/login", userManagerController.login);
    app.post("/api/userManager/logout", userManagerController.logout);
};