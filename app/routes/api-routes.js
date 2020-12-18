const enemy = require("../models/characters");
const player = require("../models/characters");

module.exports = function (app) {

    app.get("/api/enemy", async function (req, res) {
        res.json(await db.enemy.findAll());
        res.status(500).end();
    });

    app.get("/api/player", async function (req, res) {
        res.json(await db.player.findAll());
        res.status(500).end();
    });


}
