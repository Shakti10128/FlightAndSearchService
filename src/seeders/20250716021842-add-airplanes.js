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
     * }],
     *  {});
    */

    queryInterface.bulkInsert("Airplanes",[
        {
          "modelNumber": "Airbus A320neo",
          "capacity": 180,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "modelNumber": "Boeing 737-800",
          "capacity": 175,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "modelNumber": "Airbus A321neo",
          "capacity": 220,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "modelNumber": "Boeing 737 MAX 8",
          "capacity": 189,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "modelNumber": "ATR 72-600",
          "capacity": 72,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "modelNumber": "Boeing 787-8",
          "capacity": 250,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "modelNumber": "Boeing 787-9",
          "capacity": 296,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "modelNumber": "Boeing 777-300ER",
          "capacity": 370,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "modelNumber": "Airbus A350-900",
          "capacity": 325,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "modelNumber": "De Havilland Canada Dash 8-400 (formerly Bombardier Q400)",
          "capacity": 86,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "modelNumber": "Airbus A319",
          "capacity": 144,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "modelNumber": "Dornier 228",
          "capacity": 19,
          "createdAt": new Date(),
          "updatedAt": new Date()
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
