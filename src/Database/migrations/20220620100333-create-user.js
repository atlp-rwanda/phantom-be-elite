/** @format */

"use strict";
export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable("Users", {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
		},
		id_number: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		permit_id: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		phone: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
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
}
export async function down(queryInterface, Sequelize) {
	await queryInterface.dropTable("Users");
}
