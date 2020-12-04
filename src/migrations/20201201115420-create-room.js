'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Room', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        unique: true,
      },
      player1Id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      player2Id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      player1Choice: {
        type: Sequelize.STRING,
        allowNull: true
      },
      player2Choice: {
        type: Sequelize.STRING,
        allowNull: true
      },
      result: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Room')
  },
}
