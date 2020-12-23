const db = require("../models");

module.exports = function (app) {
  app.get("/api/characterName", function (req, res) {
    db.user.findAll({}).then(function (dbuser) {
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

  app.get("/api/enemies", async function (req, res, next) {
    try {
      const enemies = await db.enemy.findAll();
      res.json(enemies);
    } catch (err) {
      res.status(500).end();
    }
  });

  app.get("/api/characters", async function (req, res, next) {
    try {
      const characters = await db.character.findAll();
      res.json(characters);
    } catch (err) {
      res.status(500).end();
    }
  });

  app.get("/api/characters/:class", async function (req, res, next) {
    try {
      const character = await db.character.findOne({
        where: { classType: req.params.class },
      });
      res.json(character);
    } catch (err) {
      res.status(500).end();
    }
  });
};
