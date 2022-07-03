/** @format */

"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Buses", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			bus_number: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			plate_number: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			route: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Buses");
	},
};
