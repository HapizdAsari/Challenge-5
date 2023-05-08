'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash('SuperAdmin', salt);

    await queryInterface.bulkInsert('Users', [{
      email: 'superadmin@gmail.com',
      password: hashPassword,
      role: 'Super Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  }
};
