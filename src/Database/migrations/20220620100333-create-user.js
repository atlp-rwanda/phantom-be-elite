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
		},
		email: {
			type: Sequelize.STRING,
		},
		id_number: {
			type: Sequelize.STRING,
		},
		permit_id: {
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
}
export async function down(queryInterface, Sequelize) {
	await queryInterface.dropTable("Users");
}
