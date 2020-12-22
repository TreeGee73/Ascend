module.exports = function(sequelize, DataTypes) {
    let playerName = sequelize.define("playerName", {
      classType: DataTypes.STRING,
      name: DataTypes.STRING,
      health: DataTypes.INTEGER,
      attack: DataTypes.INTEGER,
      defense: DataTypes.INTEGER,
      speed: DataTypes.INTEGER,
      experience: DataTypes.INTEGER,
    });
    return playerName;
}

// INSERT INTO player ( classType, name, health, attack, defense, speed, exp, image) values ("Warrior", "Blade", 100, 50, 25, 100, 0, "warrior.jpg");
