const db = require("../models");

module.exports = function (app) {

    app.get("/api/playerName", async function (req, res) {
        try {
            res.json(await db.playerName.findAll(
                // `INSERT INTO playerName(
                //     classType, name, health, attack, defense, speed, experience);`

            ));
        } catch (err) {
            res.status(500).end();
        }
    });

    app.post("/api/playerName", async function (req, res) {
        try {
          await db.playerName.create(req.body);
          res.json({ msg: "Added Player!" });
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
