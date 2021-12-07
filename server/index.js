const express = require('express')
const cors = require('cors')
const app = express()
const validInfos = require('./middleware/validInfosUser')


//Middleware
app.use(express.json())//req.body
app.use(cors())


//Routes
app.use('/signup',require('./routes/signup'))
app.use('/login', require('./routes/login'))
app.use('/dashboard', require('./routes/dashboard'))
app.use('/profil', require('./routes/profil'))
app.use('/buy_crypto', require('./routes/buy_crypto'))
app.use('/transfert_crypto', require('./routes/transfert_crypto'))
app.use('/contact', require('./routes/contact'))

// app.use('/activity', require('./routes/activity'))







app.listen('5000', () => {
  console.log('🤖 ↝ 🔌• connecté sur le Port 5000 •🔌');
})