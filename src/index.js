require('dotenv').config()
import express from 'express'

import roomRouter from './router/room'
import userRouter from './router/user'

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/room', roomRouter)
app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.send('Hallo word')
})

app.listen(port, () =>
  console.log(`Server run on port : http://localhost:${port}'`)
)
