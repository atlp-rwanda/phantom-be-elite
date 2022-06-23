/** @format */

"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Buses",
			[
				{
					bus_number: "Bus-001",
					plate_number: "RAD506C",
					route: "D-302",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					bus_number: "Bus-002",
					plate_number: "RAD506C",
					route: "D-107",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					bus_number: "Bus-003",
					plate_number: "RAD506C",
					route: "D-115",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					bus_number: "Bus-004",
					plate_number: "RAD506C",
					route: "D-245",
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
