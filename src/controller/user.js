import { User, UserBio } from '../models'

class userController {
  static getRegister = (req, res) => {
    res.render('createUser', { registerError: null })
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
      res
        .status(400)
        .render('createUser', {
          registerError: 'Register Error please check password',
        })
    }
  }

  static getLogin = async (req, res) => {
    res.render('loginUser', { loginError: null })
  }

  static postLogin = async (req, res) => {
    const { username, password } = req.body

    try {
      const user = await User.findByCredential(username, password)

      const token = await user.generateAuthToken()

      res
        .status(201)
        .cookie('authToken', token, { maxAge: 360000, httpOnly: true })
        .redirect('/home')
    } catch (err) {
      res.status(400).render('loginUser', {
        loginError: 'login Error please check username and password',
      })
    }
  }

  static logout = async (req, res) => {
    const { user } = req

    user.tokens = null

    await user.save()

    res.redirect('/user/login')
  }
}

export default userController
