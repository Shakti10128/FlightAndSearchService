'use strict';

/** @type {import('sequelize-cli').Migration} */
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

    await queryInterface.bulkInsert('Airports',[
      {
        name: "Goa International Airport (Dabolim)",
        cityId: 9, // Using 'Meerut' temporarily as placeholder; update if Goa is added later
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Manohar International Airport (Mopa)",
        cityId: 9, // Same placeholder
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chhatrapati Shivaji Maharaj International Airport",
        cityId: 2, // Mumbai
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Navi Mumbai International Airport",
        cityId: 2, // Mumbai
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pune Airport (Lohegaon)",
        cityId: 11, // Pune
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Purandar Airport (Upcoming)",
        cityId: 11, // Pune
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{})
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
