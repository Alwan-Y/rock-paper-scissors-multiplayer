const bcrypt = require('bcrypt')

const salt = bcrypt.genSaltSync()
const password = bcrypt.hashSync('password', salt)


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'User',
      [
        {
          id: 'c4cb353b-0f1e-455b-b634-562a6d39bc90',
          username: 'admin',
          password,
          roleBase: 'admin',
          createdAt: '2020-12-06 15:54:24',
          updatedAt: '2020-12-06 15:54:24',
        },
        {
          id: '044ddfea-1938-4072-9fcf-9ae36be919a6',
          username: 'alwan',
          password,
          roleBase: 'user',
          createdAt: '2020-12-06 15:55:24',
          updatedAt: '2020-12-06 15:55:24',
        },
        {
          id: 'a71a920d-249c-4081-b95a-433406ff7d8b',
          username: 'nicola',
          password,
          roleBase: 'user',
          createdAt: '2020-12-06 15:56:24',
          updatedAt: '2020-12-06 15:57:24',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {})
  },
}
