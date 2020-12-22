const db = require("../models");

module.exports = function (app) {

    app.get("/api/enemy", async function (req, res) {
        try {
            res.json(await db.enemy.findAll());
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    });

    app.get("/api/user", async function (req, res) {
        try {
            res.json(await db.user.findAll());
        } catch (err) {
            res.status(500).end();
        }
    });

}
