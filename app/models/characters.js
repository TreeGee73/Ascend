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
    experience: Sequelize.INTEGER,
  },
  { timestamps: false }
);

const user = sequelize.define(
  "user",
  {
    name: Sequelize.STRING,
    health: Sequelize.INTEGER,
    attack: Sequelize.INTEGER,
    defense: Sequelize.INTEGER,
    speed: Sequelize.INTEGER,
    experience: Sequelize.INTEGER,
  },
  { timestamps: false }
);

enemy.sync();
user.sync();

module.exports = enemy;
module.exports = user;
module.exports = db;
