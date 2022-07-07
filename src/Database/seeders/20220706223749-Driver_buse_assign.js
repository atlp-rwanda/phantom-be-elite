/** @format */

"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
      "Driver_buse_assigns",
      [
        {
          driver_name: "Eric panga",
          plate_number: "RAD 7000 DAF",
          route: "kimironko - remera",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          driver_name: "Eric panga",
          plate_number: "RAD 2300 G",
          route: "kimironko - rwimbogo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          driver_name: "Eric panga",
          plate_number: "RAD 340 C",
          route: "kimironko - nyamiyaga",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
	},

	async down(queryInterface, Sequelize) {
		  await queryInterface.bulkDelete("Driver_buse_assigns", null, {});
	},
};
