import jwt from 'jsonwebtoken'
import { Op } from 'sequelize'
import { User } from '../models'

export const auth = async (req, res, next) => {
  const secret = process.env.SECRET

  try {
    const token = req.cookies.authToken
    const decoded = jwt.verify(token, secret)
    const user = await User.findOne({
      where: { id: decoded.id, tokens: { [Op.contains]: [token] } },
    })

    if (!user) {
      throw new Error()
    }

    req.token = token
    req.user = user

    res.locals.loggedUser = req.user

    next()
  } catch (err) {
    res.locals.loggedUser = null
    res.redirect('/user/login')
  }
}

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedUser = null
  next()
}
