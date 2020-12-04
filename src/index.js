require('dotenv').config()
import express from 'express'
import engine from 'ejs-locals'

import roomRouter from './router/room'
import userRouter from './router/user'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.engine('ejs', engine)
app.set('views', 'src/views')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/room', roomRouter)
app.use('/user', userRouter)

app.get('/home', (req, res) => {
  res.render('homePage')
})

app.listen(port, () =>
  console.log(`Server run on port : http://localhost:${port}'`)
)
