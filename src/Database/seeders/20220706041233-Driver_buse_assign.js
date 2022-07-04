'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert(
        "Driver_buse_assigns",
        [
          {
            route: "Nyanza - Ngororero",
            driver_name: "Williams Roto",
            plate_number: "RAB 1203 B",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            route: "Nyanza - Nyanza",
            driver_name: "Khan Roto",
            plate_number: "RAB 1203 B",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            route: "Nyanza - Ngoma",
            driver_name: "Robert Roto",
            plate_number: "RAB 1206 B",
            createdAt: new Date(),
            updatedAt: new Date(),
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
