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