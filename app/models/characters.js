const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const db = {};

const enemy = sequelize.define(
  "enemy",
  {
    name: Sequelize.STRING,
    health: Sequelize.INTEGER,
    attack: Sequelize.INTEGER,
    defense: Sequelize.INTEGER,
    speed: Sequelize.INTEGER,
  },
  { timestamps: false }
);

const player = sequelize.define(
  "player",
  {
    name: Sequelize.STRING,
    health: Sequelize.INTEGER,
    attack: Sequelize.INTEGER,
    defense: Sequelize.INTEGER,
    speed: Sequelize.INTEGER,
  },
  { timestamps: false }
);

enemy.sync();
player.sync();

module.exports = enemy;
module.exports = player;
module.exports = db;
