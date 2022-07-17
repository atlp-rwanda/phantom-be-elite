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
          speed: "30",
          lat:"45.6",
          long:"67.9"
        },
        {
					bus_number: "Bus-002",
					plate_number: "RAE457B",
          time_start: "12:00",
          origin: "Nyabugogo",
          destination: "Kimironko",
          passengers: "52",
          speed: "30",
          lat:"45.6",
          long:"67.9"
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
