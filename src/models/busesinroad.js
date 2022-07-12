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
  BusesInRoad.init({
    driver_id: DataTypes.INTEGER,
    plate_number: DataTypes.STRING,
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    passengers: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    long: DataTypes.DECIMAL,
    lat: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'BusesInRoad',
  });
  return BusesInRoad;
};