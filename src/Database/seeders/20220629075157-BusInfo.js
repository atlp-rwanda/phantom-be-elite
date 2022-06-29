'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "BusInfos", [{
                location: "Nyabugogo",
                status: "moving",
                commuters: 20,
                type: 'KBS',
                totalSeats: 45,
                availableSeats: 25,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, ], {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};