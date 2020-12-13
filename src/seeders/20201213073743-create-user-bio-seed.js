'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'UserBio', 
      [
        {
          id: '8e8e0b99-f1f1-4729-84f5-9e09dfafa81d',
          fullName: 'Alwan Yusuf',
          gander: 'm',
          age: 20,
          userId: '044ddfea-1938-4072-9fcf-9ae36be919a6',
        },
        {
          id: '0491b2b8-3498-4ae4-a5b9-812e7a284120',
          fullName: 'Nicola Donoastro',
          gander: 'm',
          age: 20,
          userId: 'a71a920d-249c-4081-b95a-433406ff7d8b',
        }
      ], 
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserBio', null, {});
  }
};
