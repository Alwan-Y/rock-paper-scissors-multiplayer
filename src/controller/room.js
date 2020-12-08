import { Room } from '../models'

class roomController {
  static getRoom = async (req, res) => {
    const { id } = req.params

    try {
      const room = await Room.findOne({ where: { id } })
      room.getResult()

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
        await room.save()
      }

      if (user.username === room.player2Username && !room.player2Choice) {
        room.player2Choice = choice
        await room.save()
      }

      res.redirect(`/room/id/${id}`).isChoice = true
    } catch (err) {
      res.status(400).send(err)
    }
  }

  static resetChoice = async (req, res) => {
    const { id } = req.body

    const resetChoice = await Room.update(
      {
        player1Choice: null,
        player2Choice: null,
        result: null,
      },
      { where: { id } }
    )

    return res
      .status(200)
      .json({ message: 'Succes reset player choice & result' })
  }
}

export default roomController
