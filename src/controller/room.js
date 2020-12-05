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

    static addPlayerOptions = async (req, res) => {
      try {
          const { id, userId, choice } = req.body

          const findRoom = await Room.findOne({ where: { id } })

          if (findRoom.player1Choice && findRoom.player2Choice) {
              return res.status(400).json({ message: 'press refresh first!'})
          }

          if (findRoom.player1Id === userId && findRoom.player1Choice === null) {
              const updateRoom = await Room.update(
                  {
                      player1Choice: choice,
                  },
                  { where: { id } }
                  )
          
                  return res.status(200).json({ message: `Wait player 2 choice` })
          }

          if (findRoom.player2Id === userId && findRoom.player2Choice === null) {
              const updateRoom = await Room.update(
                  {
                      player2Choice: choice,
                  },
                  { where: { id } }
                  )
          
                  return res.status(200).json({ message: `Wait player 1 choice` })
          }
      } catch (err) {
          res.status(500).send(err)
      }
  }

    static getResult = async (req, res) => {
      const { id } = req.body

      const getPlayerChoice = await Room.findOne({ where: {id} })

      const renderResult = async (result) => {
          const updateResult = await Room.update(
              {
                  result: result,
              },
              { where: {id} }
              )
      }

      if (getPlayerChoice.player1Choice === getPlayerChoice.player2Choice) {
          renderResult('DRAW')

          return res.status(200).json({ message: 'DRAW'})
      } 

      if (getPlayerChoice.player1Choice === 'rock' && getPlayerChoice.player2Choice === 'scissor') {
          renderResult('PLAYER 1 WIN')

          return res.status(200).json({ message:'PLAYER 1 WIN'}) 
      }
      
      if (getPlayerChoice.player1Choice === 'rock' && getPlayerChoice.player2Choice === 'paper') {
          renderResult('PLAYER 2 WIN')

          return res.status(200).json({ message:'PLAYER 2 WIN' })
      }
      
      if (getPlayerChoice.player1Choice === 'paper' && getPlayerChoice.player2Choice === 'rock') {
          renderResult('PLAYER 1 WIN')

          return res.status(200).json({ message:'PLAYER 1 WIN'}) 
      }

      if (getPlayerChoice.player1Choice === 'paper' && getPlayerChoice.player2Choice === 'scissor') {
          renderResult('PLAYER 2 WIN')

          return res.status(200).json({ message:'PLAYER 2 WIN' })
      }

      if (getPlayerChoice.player1Choice === 'scissor' && getPlayerChoice.player2Choice === 'paper') {
          renderResult('PLAYER 1 WIN')

          return res.status(200).json({ message:'PLAYER 1 WIN'}) 
      }

      if (getPlayerChoice.player1Choice === 'scissor' && getPlayerChoice.player2Choice === 'rock') {
          renderResult('PLAYER 2 WIN')

          return res.status(200).json({ message:'PLAYER 2 WIN' })
      }    
  }
}

export default roomController
