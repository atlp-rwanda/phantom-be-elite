/** @format */
"use strict";
import bcryptjs from "bcryptjs";
const { hash } = bcryptjs;

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					name: "prince",
					email: "prince@gmail.com",
					id_number: "1111111111111111",
					permit_id: "1111111111111111",
					phone: "0780000000",
					password: await hash("password@123", 12),
					role: "driver",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "axel",
					email: "axel@gmail.com",
					id_number: "1111111111111112",
					permit_id: "1111111111111113",
					phone: "0780000001",
					password: await hash("password@123", 12),
					role: "operator",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "salim",
					email: "salim@gmail.com",
					id_number: "1111111111111114",
					permit_id: "1111111111111115",
					phone: "0780000002",
					password: await hash("password@123", 12),
					role: "admin",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "ben",
					email: "ben@gmail.com",
					id_number: "1111111111111116",
					permit_id: "1111111111111117",
					phone: "0780000004",
					password: await hash("password@123", 12),
					role: "client",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
