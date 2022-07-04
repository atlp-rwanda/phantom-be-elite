'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver_buse_assign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Driver_buse_assign.init({
    route: DataTypes.STRING,
    driver_name: DataTypes.STRING,
    plate_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Driver_buse_assign',
  });
  return Driver_buse_assign;
};