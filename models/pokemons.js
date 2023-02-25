"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pokemons.hasMany(models.User_Pokemons, { foreignKey : 'pokemonID'});
    }
  }
  Pokemons.init(
    {
      pokemonName: {
        type: DataTypes.STRING,
      },
      hit: {
        type: DataTypes.INTEGER,
      },
      hp: {
        type: DataTypes.INTEGER,
      },
      level: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "Pokemons",
      timestamps: true,
      freezeTableName: true,
    }
  );
  return Pokemons;
};

