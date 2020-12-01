const { Room } = require('../models')

const roomController = {
  getRoom: (req, res) => {
    try {
      res.send('hallo')
    } catch (err) {
      res.send(err)
    }
  },

  createRoom: async (req, res) => {
    try {
      const room = await Room.createRoom()

      res.status(200).send(room)
    } catch (err) {
      res.status(400).send(err)
    }
  },
}

module.exports = roomController
