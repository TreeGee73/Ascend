module.exports = function (sequelize, DataTypes) {
    let user = sequelize.define("user", {
      name: DataTypes.STRING,
    });

    user.associate = function (models) {
      models.user.hasMany(models.characterName, {
        foreignKey: {
          allowNull: false,
        },
      });
    };

    return user;
  };
