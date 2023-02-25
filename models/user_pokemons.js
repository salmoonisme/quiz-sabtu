"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Pokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Pokemons.belongsTo(models.Users, { foreignKey: 'userID'});
      User_Pokemons.belongsTo(models.Pokemons, { foreignKey: 'pokemonID'});
    }
  }
  User_Pokemons.init(
    {
      userID: {
        type: DataTypes.INTEGER,
      },
      pokemonID: {
        type: DataTypes.INTEGER,
      },
      userName: {
        type: DataTypes.STRING,
      },
      pokemonName: {
        type: DataTypes.STRING,
      }
    },
    {
      sequelize,
      modelName: "User_Pokemons",
      timestamps: true,
      freezeTableName: true,
    }
  );
  return User_Pokemons;
};