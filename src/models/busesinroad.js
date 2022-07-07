'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusesInRoad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BusesInRoad.init(
    {
      bus_number: DataTypes.STRING,
      plate_number: DataTypes.STRING,
      time_start: DataTypes.STRING,
      origin: DataTypes.STRING,
      destination: DataTypes.STRING,
      passengers: DataTypes.INTEGER,
      speed: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BusesInRoad",
    }
  );
  return BusesInRoad;
};