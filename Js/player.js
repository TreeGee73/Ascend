let player;

function Player(classType, health, attack, defense, speed) {
    this.classType = classType;
    // this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        // who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        let playerAttack = function() {
        let calcBaseDamage;
        calcBaseDamage = player.attack - enemy.defense;

        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcTotal = calcBaseDamage + offsetDamage;
        return calcTotal;
        }

        let enemyAttack = function() {
        let calcBaseDamage;
        calcBaseDamage = enemy.attack - player.defense;
           console.log(enemy.attack);

        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcTotal = calcBaseDamage + offsetDamage;
        return calcTotal;
        }
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        if (getPlayerSpeed >= getEnemySpeed) {
            let calcTotal = playerAttack();
            enemy.health = enemy.health - calcTotal;
            alert("You hit for " + calcTotal);
        if (enemy.health <= 0) {
            alert("You win!");
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;

            let totalDamage = enemyAttack();

            player.health = player.health - totalDamage;
            alert("Enemy hit for " + totalDamage);
        if (player.health <= 0) {
            alert("You Dead!");
            getPlayerHealth.innerHTML = 'Health: 0';
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        } else {
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }

        }
        }
        else if (getEnemySpeed >= getPlayerSpeed) {
            let calcTotal = enemyAttack();
            player.health = player.health - calcTotal;
            alert("Enemy hit for " + calcTotal);
        if (player.health <= 0) {
            alert("You lose!");
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            getPlayerHealth.innerHTML = 'Health: 0';
        } else {
            getPlayerHealth.innerHTML = 'Health: ' + player.health;

            let totalDamage = playerAttack();

            enemy.health = enemy.health - totalDamage;
            alert("You hit for " + totalDamage);
        if (enemy.health <= 0) {
            alert("You Win!");
            getEnemyHealth.innerHTML = 'Health: 0';
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }

        }
        }

    }
}

const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const characters = sequelize.define(
  "characters",
  {
    name: Sequelize.STRING,
    health: Sequelize.INTEGER,
    attack: Sequelize.INTEGER,
    defense: Sequelize.INTEGER,
    speed: Sequelize.INTEGER,
  },
  { timestamps: false }
);

characters.sync();

module.exports = characters;
