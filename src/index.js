<<<<<<< HEAD
import express from 'express'
import views from './router/views'
import apis from './router/apis'


require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use('/', views)
app.use('/apis', apis)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server run on port : http://localhost:${port}`)
})
=======
import express from 'express'
import views from './router/views'
import apis from './router/apis'


require('dotenv').config()

import userRouter  from './router/user'
import roomRouter  from './router/room'
import views from './router/views'
import apis from './router/apis'

app.set('view engine', 'ejs')
app.set('views', 'src/views')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/user', userRouter)
app.use('/room', roomRouter)
app.use('/', views)
app.use('/apis', apis)


app.get('/', (req, res) => {
  res.send('Hallo word')
})

app.listen(port, () =>
  console.log(`Server run on port : http://localhost:${port}'`)
)
>>>>>>> a0ae5f6... add create roomId
