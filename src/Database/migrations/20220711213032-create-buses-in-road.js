'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BusesInRoads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      driver_id: {
        type: Sequelize.INTEGER
      },
      plate_number: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      passengers: {
        type: Sequelize.INTEGER
      },
      speed: {
        type: Sequelize.INTEGER
      },
      long: {
        type: Sequelize.DECIMAL
      },
      lat: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BusesInRoads');
  }
};