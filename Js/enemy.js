let enemy;

function Enemy(classType, health, attack, defense, speed) {
    this.classType = classType;
    // this.name =name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
};

const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const enemyCharacter = sequelize.define(
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

enemyCharacter.sync();

module.exports = enemyCharacter;
