import { Room, User, UserBio } from '../models/'

class dashboardController {
  static getDashboard = (req, res) => {
    res.render('dashboard')
  }

  static getAllUser = async (req, res) => {
    try {
      const allUser = await User.findAll()
      res.status(200).json(allUser)
    } catch(err) {
      res.status(500).json(err)
    }
  }

  static getAllBio = async (req, res) => {
    try {
      const allUserBio = await UserBio.findAll()
      res.status(200).json(allUserBio)
    } catch(err) {
      res.status(500).json(err)
    }
  }

  static getAllRoom = async (req, res) => {
    try {
      const allRoom = await Room.findAll()
      res.status(200).json(allRoom)
    } catch(err) {
      res.status(500).json(err)
    }
  }

  static deleteUser = async (req, res) => {
    try {
      const { id } = req.params

      const findHistory = await User.findOne({ where: { id } })

      if (!findHistory) {
        return res.status(404).json({ message: 'User not found' })
      }

      const deleted = await User.destroy({ where: { id } })

      res.status(200).json({ message: 'Deleted User' })
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  static deleteBio = async (req, res) => {
    try {
      const { id } = req.params

      const findBio = await UserBio.findOne({ where: { id } })

      if (!findBio) {
        return res.status(404).json({ message: 'UserBio not found' })
      }

      const deleted = await UserBio.destroy({ where: { id } })

      res.status(200).json({ message: 'Deleted UserBio' })
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  static deleteHistory = async (req, res) => {
    try {
      const { id } = req.params

      const findRoom = await Room.findOne({ where: { id } })

      if (!findRoom) {
        return res.status(404).json({ message: 'Room not found' })
      }

      const deleted = await Room.destroy({ where: { id } })

      res.status(200).json({ message: 'Deleted Room' })
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }

}

export default dashboardController
