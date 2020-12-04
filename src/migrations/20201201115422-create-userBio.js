'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserBio', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        unique: true,
      },
      fullName: {
        type: Sequelize.STRING,
        unique: true,
      },
      gander: {
        type: Sequelize.ENUM,
        values: ['m', 'f'],
      },
      age: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserBio')
  },
}
