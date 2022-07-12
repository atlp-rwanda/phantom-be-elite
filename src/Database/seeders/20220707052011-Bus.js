'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Buses",
    [
      {
        bus_number: "Ford",
        plate_number: "RAB 230 B",
        route: "Nyabugogo - Kagugu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bus_number: "Yutongo",
        plate_number: "RAD 506 C",
        route: "Gishushu - Gisimenti",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bus_number: "Tundra",
        plate_number: "RAC 120 D",
        route: "Kinyinya - Kimironko",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bus_number: "Range rover",
        plate_number: "RAD506C",
        route: "Remera - Nyanza",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
  },

  async down (queryInterface, Sequelize) {
 		  await queryInterface.bulkDelete("Buses", null, {});

  }
};
