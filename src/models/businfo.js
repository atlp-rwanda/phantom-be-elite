'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BusInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BusInfo.init({
    location: DataTypes.STRING,
    status: DataTypes.ENUM,
    commuters: DataTypes.INTEGER,
    type: DataTypes.ENUM,
    totalSeats: DataTypes.INTEGER,
    availableSeats: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BusInfo',
  });
  return BusInfo;
};