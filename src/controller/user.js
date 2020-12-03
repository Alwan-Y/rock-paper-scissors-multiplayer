import { User } from '../models'

class userController {
  static getRegister = (req, res) => {
    res.render('createUser')
  }

  static postRegister = async (req, res) => {
    const { body } = req

    try {
      const user = await User.register(body)

      res.status(200).send(user)
    } catch (err) {
      res.status(400).send(err)
    }
  }
}

export default userController
