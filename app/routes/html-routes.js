const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../Develop/index.html"));
    });

    app.get("/combat", function(req, res) {
        res.sendFile(path.join(__dirname, "../Develop/combat.html"));
    });

    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../Develop/index.html"));
    });
}
