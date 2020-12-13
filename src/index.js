require('dotenv').config()
import express from 'express'
import engine from 'ejs-locals'
import cookieParser from 'cookie-parser'

import roomRouter from './router/room'
import userRouter from './router/user'
import dashboardRouter from './router/dashboard'
import apiRouter from './router/api'

import { checkAuth, auth } from './middleware/index'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.engine('ejs', engine)
app.set('views', 'src/views')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(checkAuth)

app.use('/room', roomRouter)
app.use('/user', userRouter)
app.use('/dashboard', dashboardRouter)
app.use('/api', apiRouter)

app.get('/', (req, res) => {
  res.redirect('/user/login')
})

app.get('/home', auth, (req, res) => {
  res.render('homePage')
})

app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(port, () =>
  console.log(`Server run on port : http://localhost:${port}'`)
)
