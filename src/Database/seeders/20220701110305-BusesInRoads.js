/** @format */

"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "BusesInRoads",
    [
      {
        bus_number:"123",
        plate_number:"RAE034A",
        time_start:"1200",
        route:"12D",
        passengers:"32",
        speed:"39",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {}
  );
}
export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
}
