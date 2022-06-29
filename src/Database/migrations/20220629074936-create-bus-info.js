'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('BusInfos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            location: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.ENUM,
                values: ["moving", "at rest", "stuck in traffic", ],
                default: "at rest",
            },
            commuters: {
                type: Sequelize.INTEGER
            },
            type: {
                type: Sequelize.ENUM,
                values: ["KBS", "JALI", "ROYAL", ],

            },
            totalSeats: {
                type: Sequelize.INTEGER
            },
            availableSeats: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('BusInfos');
    }
};