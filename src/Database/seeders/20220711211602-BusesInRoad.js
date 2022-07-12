'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "BusesInRoads",
    [
      {
        driver_id:"222",
        plate_number:"RAE678A",
        origin:"Nyamirambo",
        destination:"kicukiro",
        passengers:"30",
        speed:"20",
        long:"80.5",
        lat:"56.7"
      },
    ],
    {}
  );
  },

  async down (queryInterface, Sequelize) {
 		  await queryInterface.bulkDelete("Buses", null, {});

  }
};
