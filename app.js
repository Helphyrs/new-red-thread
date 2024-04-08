const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')


const app = express()
const defaultRoutes = require('./routes/default')
const productRoutes = require('./routes/product')
// const userRoutes = require('./routes/users')
// const authRoutes = require('./routes/auth')
// const profileRoutes = require('./routes/profile')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())


app.use('/api', defaultRoutes)
app.use('/api/products', productRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// connectDB().then(({ db }) => {
//   app.locals.db = db
//   app.use('/api', defaultRoutes)
// //   app.use('/api/products', productRoutes(app.locals.db))
// //   app.use('/api/users', userRoutes(app.locals.db))
// //   app.use('/api/login', authRoutes(app.locals.db))
// //   app.use('/api/profile', profileRoutes(app.locals.db))
//   
// })

module.exports = app
