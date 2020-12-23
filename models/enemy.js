module.exports = function (sequelize, DataTypes) {
  let enemy = sequelize.define("enemy", {
    classType: DataTypes.STRING,
    health: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    exp: DataTypes.INTEGER,
    image: DataTypes.STRING,
  });

  // characterName.associate = function (models) {
  //   characterName.belongsTo(models.user, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };

  return enemy;
};

// INSERT INTO player ( classType, name, health, attack, defense, speed, exp, image) values ("Warrior", "Blade", 100, 50, 25, 100, 0, "warrior.jpg");
