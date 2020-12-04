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

  static getJoinRoom = (req, res) => {
    res.render('joinRoom')
  }
}

export default roomController
