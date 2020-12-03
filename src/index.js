require('dotenv').config()
import express from 'express'

import roomRouter from './router/room'

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(express.json())

app.use('/room', roomRouter)

app.get('/', (req, res) => {
  res.send('Hallo word')
})

app.listen(port, () =>
  console.log(`Server run on port : http://localhost:${port}'`)
)
