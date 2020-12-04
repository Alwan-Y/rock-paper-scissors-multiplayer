'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('History', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true,
      },
      player1Id: {
        type: Sequelize.STRING,
      },
      player2Id: {
        type: Sequelize.STRING,
      },
      player1Choice: {
        type: Sequelize.STRING,
      },
      player2Choice: {
        type: Sequelize.STRING,
      },
      result: {
        type: Sequelize.STRING,
      },
      roomId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Room',
          key: 'id',
        },
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
    await queryInterface.dropTable('History')
  },
}
