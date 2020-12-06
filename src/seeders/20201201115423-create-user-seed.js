module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'User',
      [
        {
          id: 'c4cb353b-0f1e-455b-b634-562a6d39bc90',
          username: 'admin',
          password:
            '$2b$08$S9EIMrx8jW9ddzz/uWCqPu7rJE.Tgq7w9qMBmHZ58OCY3h/1FbvJm', // 123456
          roleBase: 'admin',
          createdAt: '2020-12-06 15:54:24',
          updatedAt: '2020-12-06 15:54:24',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {})
  },
}
