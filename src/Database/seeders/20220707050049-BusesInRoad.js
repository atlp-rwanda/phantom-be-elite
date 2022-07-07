'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"BusesInRoads",
			[
				{
					bus_number: "Bus-001",
					plate_number: "RAE457A",
          time_start: "12:00",
          origin: "Nyamirambo",
          destination: "Town",
          passengers: "52",
          speed: "30"
				},
			],
			{}
		);
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
