"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Routes",
      [
        {
          origin: "Rwimbogo",
          destination: "Ngororero",
          description: "loremdsfffffffffffffffffffffffffffffffffff",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          origin: "Nyanza",
          destination: "Ngororero",
          description: "asjhkdhdddddddddddddddddddd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          origin: "Ruhango",
          destination: "Ngororero",
          description: "Asfsdghafkjghjkfldjhvcbhjxkhsd",
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
