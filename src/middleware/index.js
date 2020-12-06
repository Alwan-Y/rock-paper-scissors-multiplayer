import jwt from 'jsonwebtoken'
import { Op } from 'sequelize'
import { User } from '../models'

export const checkAuth = async (req, res, next) => {
  const secret = process.env.SECRET

  try {
    const token = req.cookies.authToken
    const decoded = jwt.verify(token, secret)
    const user = await User.findOne({
      where: { id: decoded.id, tokens: { [Op.contains]: [token] } },
    })

    req.token = token
    req.user = user

    res.locals.loggedUser = req.user || null
    res.locals.roleBase = req.user.roleBase || null

    next()
  } catch (err) {
    res.locals.loggedUser = null
    next()
  }
}

export const auth = async (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.redirect('/user/login')
  }
}

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect('/home')
  } else {
    next()
  }
}
