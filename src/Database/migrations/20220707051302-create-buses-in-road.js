'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("BusesInRoads", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bus_number: {
        type: Sequelize.STRING,
      },
      plate_number: {
        type: Sequelize.STRING,
      },
      time_start: {
        type: Sequelize.STRING,
      },
      origin: {
        type: Sequelize.STRING,
      },
      destination: {
        type: Sequelize.STRING,
      },
      passengers: {
        type: Sequelize.INTEGER,
      },
      speed: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BusesInRoads');
  }
};