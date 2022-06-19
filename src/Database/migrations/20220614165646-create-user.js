/** @format */

"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			idNumber: {
				type: Sequelize.STRING,
			},
			permitId: {
				type: Sequelize.STRING,
			},
			phone: {
				type: Sequelize.INTEGER,
			},
			password: {
				type: Sequelize.STRING,
			},
			role: {
				type: Sequelize.ENUM,
				values: ["admin", "operator", "driver", "client"],
				defaultValue: "client",
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Users");
	},
};
