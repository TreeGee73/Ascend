const db = require("../models");

module.exports = function (app) {

    app.get("/api/playerName", async function (req, res) {
        try {
            res.json(await db.playerName.findAll());
        } catch (err) {
            res.status(500).end();
        }
    });

    // app.get("/api/playerName/:player", async function (req, res) {
    //     try {
    //       res.json(
    //         await db.playerName.findAll({
    //           where: {
    //             category: req.params.player,
    //           },
    //         })
    //       );
    //     } catch (err) {
    //       res.status(500).end();
    //     }
    //   });
}
