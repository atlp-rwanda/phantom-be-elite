'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
/** @format */

"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
      "Routes",
      [
        {
          origin: "remera",
          destination: "nyabugogo",
          description: "The best line of jokes foreve",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          origin: "remera",
          destination: "nyabugogo",
          description: "The best line stress and wear from out  of jokes forever",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          origin: "remera-rukoma",
          destination: "nyabugogo",
          description: "yes tuof jokes foreve",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
	},

	async down(queryInterface, Sequelize) {
		  await queryInterface.bulkDelete("Routes", null, {});
	},
};


















