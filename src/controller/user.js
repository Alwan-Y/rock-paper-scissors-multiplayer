import { User, UserBio } from '../models'
import bcrypt from 'bcrypt'

class userController {
  static getRegister = (req, res) => {
    res.render('createUser')
  }

  static postRegister = async (req, res) => {
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

      res.status(200).redirect('/user/login')
    } catch (err) {
      res.status(400).send(err)
    }
  }

  static getLogin = async (req, res) => {
    res.render('loginUser')
  }

  static postLogin = async (req, res) => {
    const { username, password } = req.body

    try {
      const findUser = await User.findOne({ where: { username } })

      if (!findUser) {
        return res.status(404).json({ message: 'Account Not Found' })
      }

      const checkPassword = bcrypt.compareSync(password, findUser.password)

      if (!checkPassword) {
        return res.status(403).json({ message: 'Password invalid' })
      }

      res.status(201).json({ message: 'Successfully Login' })
    } catch (err) {
      res.status(400).send(err)
    }
  }
}

export default userController