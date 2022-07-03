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
      bus_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      plate_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      time_start: {
        type: Sequelize.STRING,
        allowNull: false
      },
      route: {
        type: Sequelize.STRING,
        allowNull: false
      },
      passengers: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      speed: {
        type: Sequelize.INTEGER,
        allowNull: false,
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