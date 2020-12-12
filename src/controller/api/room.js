import { Room } from '../../models'

class roomController {
  static getRoom = async (req, res) => {
    const { id } = req.params

    try {
      const room = await Room.findOne({ where: { id } })
      await room.getResult()

      res.status(200).json({ room })
    } catch (err) {
      res.status(400).json({ message: 'failure get room ' })
    }
  }

  static postCreateRoom = async (req, res) => {
    try {
      const room = await Room.createRoom('fellas')

      res.status(200).json({ message: 'success create room ', room })
    } catch (err) {
      res.status(400).json({ message: 'failure create room ' })
    }
  }

  static postJoinRoom = async (req, res) => {
    const { id } = req.body

    try {
      const room = await Room.findOne({ where: { id } })

      if (room.player1Username === user.username) {
        throw new Error('you cannot join')
      }

      if (room.player2Username) {
        throw new Error('you cannot join')
      }

      room.player2Username = user.username

      await room.save()

      res.status(200).json({ message: 'success join room ', room })
    } catch (err) {
      res.status(400).json({ message: 'error join room ', room })
    }
  }

  static postChoice = async (req, res) => {
    const {
      params: { choice, id },
      user,
    } = req

    try {
      const room = await Room.update(
        { player1Choice: choice },
        { where: { id } }
      )

      //   if (user.username === room.player1Username && !room.player1Choice) {
      //     room.player1Choice = choice
      //   }

      //   if (user.username === room.player2Username && !room.player2Choice) {
      //     room.player2Choice = choice
      //   }

      res.status(200).json({ message: 'success post choice ', room })
    } catch (err) {
      res.status(400).send(err)
    }
  }
}

export default roomController
