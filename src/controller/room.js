import { Room } from '../models'

class roomController {
  static getRoom = (req, res) => {
    try {
      res.send('hallo')
    } catch (err) {
      res.send(err)
    }
  }

  static createRoom = async (req, res) => {
    try {
      const room = await Room.createRoom()

      res.status(200).send(room)
    } catch (err) {
      res.status(400).send(err)
    }
  }
}

export default roomController
