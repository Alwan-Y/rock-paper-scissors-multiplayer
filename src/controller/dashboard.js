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

}

export default dashboardController
