const db = require("../models");

module.exports = function (app) {

    app.get("/api/characterName", function (req, res) {
      db.user.findAll({}).then(function(dbuser){
        res.json(dbuser);
      });
    });

    app.post("/api/characterName", async function (req, res) {
        try {
          await db.characterName.create(req.body);
          res.json({ msg: "Added Player!" });
        } catch (err) {
          res.status(500).end();
        }
      });

}
