import { Room, User } from '../models'

class roomController {
  static getRoom = async (req, res) => {
    const { id } = req.params

    try {
      const room = await Room.findOne({ where: { id } })

      res.status(200).render('room', { room })
    } catch (err) {
      res.status(400).send(err)
    }
  }

  static postCreateRoom = async (req, res) => {
    try {
      const room = await Room.createRoom()

      res.status(200).redirect(`/room/id/${room.id}`)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  static getJoinRoom = (req, res) => {
    res.render('joinRoom')
  }

  static postJoinRoom = async (req, res) => {
    try {
      const { id } = req.body

      const room = await Room.findOne({ where: { id } })

      if (!room) {
        return res.status(404).send({ message: 'Room not found' })
      }

      // const findUserId = await User.findOne({ where: { username } })

      // if (!findUserId) {
      //   res.status(404).json({ message: 'User not found' })
      // }

      // if (findRoom.player1Id === null) {
      //   const updateRoom = await Room.update(
      //     {
      //       player1Id: findUserId.id,
      //     },
      //     { where: { id } }
      //   )

      //   return res.status(201).json({ message: `succes joining to room ${id}` })
      // }

      // if (findRoom.player2Id === null) {
      //   const updateRoom = await Room.update(
      //     {
      //       player2Id: findUserId.id,
      //     },
      //     { where: { id } }
      //   )

      //   return res.status(201).send({ message: `succes joining to room ${id}` })
      // }
      res.status(200).redirect(`/room/id/${id}`)
    } catch (err) {
      res.status(400).send(err)
    }
  }
}

export default roomController
