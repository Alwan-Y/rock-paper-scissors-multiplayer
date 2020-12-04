import { Room, User } from '../models'

class roomController {
  static getRoom = async (req, res) => {
    const { id } = req.params

    try {
      const room = await Room.findOne({ where: { id } })

      res.render(room, { room })
    } catch (err) {
      res.send(err)
    }
  }

  static postCreateRoom = async (req, res) => {
    try {
      const room = await Room.createRoom()

      res.status(200).redirect(`/room/${id}`)
    } catch (err) {
      res.status(400).send(err)
    }
  }

<<<<<<< src/controller/room.js
  static getJoinRoom = (req, res) => {
    res.render('joinRoom')
  }

  static postJoinRoom = async (req, res) => {
    try {
      const { id } = req.params
      const { username } = req.body

      const findRoom = await Room.findOne({ where: { id } })
      console.log(findRoom)

      if (!findRoom) {
        return res.status(404).json({ message: 'Room not found' })
      }

      const findUserId = await User.findOne({ where: { username } })
      console.log(findUserId)
      console.log(findUserId.id)

      if (!findUserId) {
        res.status(404).json({ message: 'User not found' })
      }

      if (findRoom.player1Id === null) {
        const updateRoom = await Room.update(
          {
            player1Id: findUserId.id,
          },
          { where: { id } }
        )

        return res.status(201).json({ message: `succes joining to room ${id}` })
      }

      if (findRoom.player2Id === null) {
        const updateRoom = await Room.update(
          {
            player2Id: findUserId.id,
          },
          { where: { id } }
        )

        return res.status(201).json({ message: `succes joining to room ${id}` })
      }
    } catch (err) {
=======
  static joinRoom = async (req, res) => {
    try {
      const { id } = req.params
      const { username } = req.body

      const findRoom = await Room.findOne({ where: { id } })
      console.log(findRoom)

      if (!findRoom) {
        return res.status(404).json({ message: 'Room not found' })
      }

      const findUserId = await User.findOne({ where: { username } })
      console.log(findUserId)
      console.log(findUserId.id)

      if (!findUserId) {
        res.status(404).json({ message: 'User not found' })
      }

      if (findRoom.player1Id === null) {
        const updateRoom = await Room.update(
          {
            player1Id: findUserId.id,
          },
          { where: { id } }
        )

        return res.status(201).json({ message: `succes joining to room ${id}` })
      }

      if (findRoom.player2Id === null) {
        const updateRoom = await Room.update(
          {
            player2Id: findUserId.id,
          },
          { where: { id } }
        )

        return res.status(201).json({ message: `succes joining to room ${id}` })
      }
    } catch(err) {
>>>>>>> src/controller/room.js
      return res.status(500).json(err)
    }
  }
}

export default roomController
