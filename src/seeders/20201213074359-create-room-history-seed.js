'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Room', 
      [
        {
          id: 'ec3c0645-41e9-4560-bf0e-27356a2a77fd',
          player1Username: 'alwan',
          player2Username: 'nicola',
          player1Choice: 'paper',
          player2Choice: 'rock',
          result: 'Player 1 Win',
          createdAt: '2020-12-06 15:55:25',
          updatedAt: '2020-12-06 15:55:26',
        },
        {
          id: '1848c864-6d53-4f7d-974c-e41cbc9ffd89',
          player1Username: 'alwan',
          player2Username: 'nicola',
          player1Choice: 'rock',
          player2Choice: 'paper',
          result: 'Player 2 Win',
          createdAt: '2020-12-06 15:55:28',
          updatedAt: '2020-12-06 15:55:30',
        },
      ], 
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Room', null, {});
  }
};
