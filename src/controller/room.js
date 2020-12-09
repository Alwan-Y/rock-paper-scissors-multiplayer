import { Room } from '../models'

class roomController {
  static getRoom = async (req, res) => {
    const { id } = req.params

    try {
      const room = await Room.findOne({ where: { id } })
      await room.getResult()

      res.status(200).render('room', { room })
    } catch (err) {
      res.status(400).send(err)
    }
  }

  static postCreateRoom = async (req, res) => {
    const { user } = req

    try {
      const room = await Room.createRoom(user.username)

      res.status(200).redirect(`/room/id/${room.id}`)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  static getJoinRoom = (req, res) => {
    res.render('joinRoom', { joinError: null })
  }

  static postJoinRoom = async (req, res) => {
    const { user } = req

    try {
      const { id } = req.body

      const room = await Room.findOne({ where: { id } })

      room.player2Username = user.username

      await room.save()

      res.status(200).redirect(`/room/id/${id}`)
    } catch (err) {
      res.status(400).render('joinRoom', { joinError: 'room not found' })
    }
  }

  static postChoice = async (req, res) => {
    const {
      params: { choice, id },
      user,
    } = req

    try {
      const room = await Room.findOne({ where: { id } })

      if (user.username === room.player1Username && !room.player1Choice) {
        room.player1Choice = choice
      }

      if (user.username === room.player2Username && !room.player2Choice) {
        room.player2Choice = choice
      }

      await room.save()
      res.redirect(`/room/id/${id}`)
    } catch (err) {
      res.status(400).send(err)
    }
  }
}

export default roomController
