import { User, UserBio } from '../../models'

class userController {
  static register = async (req, res) => {
    const {
      username,
      password,
      confirmPassword,
      fullName,
      gander,
      age,
    } = req.body

    try {
      if (password !== confirmPassword) {
        throw new Error('Password and Confirm Password not match')
      }

      const encryptedPassword = User.encrypt(password)

      const userBody = {
        username,
        password: encryptedPassword,
        UserBio: [
          {
            fullName,
            gander,
            age,
          },
        ],
      }

      const user = await User.create(userBody, { include: [UserBio] })

      res.status(200).json({ message: 'register success' })
    } catch (err) {
      res.status(400).json({ message: 'register failed' })
    }
  }

  static login = async (req, res) => {
    const { username, password } = req.body

    try {
      const user = await User.findByCredential(username, password)

      if (!user) {
        throw new Error('Unable login')
      }

      const token = await user.generateAuthToken()

      res
        .status(201)
        .cookie('authToken', token, { maxAge: 360000, httpOnly: true })
        .json({ message: 'login success', user })
    } catch (err) {
      res.status(400).json({ message: 'login failed' })
    }
  }

  static logout = async (req, res) => {
    const { user } = req

    try {
      user.tokens = null

      await user.save()

      res.json({ message: 'logout success' })
    } catch (err) {
      res.status(400).json({ message: 'logout failed' })
    }
  }
}

export default userController
