const express = require('express')
const cors = require('cors')
const app = express()


//Middleware
app.use(express.json())//req.body
app.use(cors())

//Routes
app.use('/signup',require('./routes/signup'))
app.use('/login', require('./routes/login'))



app.listen('5000', () => {
  console.log('🤖 ↝ 🔌• connecté sur le Port 5000 •🔌');
})