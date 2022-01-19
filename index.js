const express = require('express')
const cors = require('cors')
const app = express()

// process.env.PORT
const PORT = process.env.PORT || 5000;
// process.env.Node_ENV
if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

//Middleware
app.use(express.json())//req.body
app.use(cors())
app.use('/', require('./middleware/validInfosUser'))
app.use('/', require('./middleware/validInfosContact'))
app.use('/', require('./middleware/validInfosCryptos'))


//Routes
app.use('/signup',require('./routes/signup'))
app.use('/login', require('./routes/login'))
app.use('/dashboard', require('./routes/dashboard'))
app.use('/profil', require('./routes/profil'))
app.use('/market', require('./routes/crypto_market'))
app.use('/buy_crypto', require('./routes/buy_crypto'))
app.use('/transfert_crypto', require('./routes/transfert_crypto'))
app.use('/sell_crypto', require('./routes/sell_crypto'))
app.use('/contact', require('./routes/contact'))
app.use('/activity', require('./routes/activity'))
app.use('/my_crypto', require('./routes/user_crypto'))

app.listen(PORT, () => {
  console.log('🤖 ↝ 🔌• connecté sur le Port 5000 •🔌');
})

app.get("*", (req,res)=> {
  res.sendFile(path.join(__dirname, "client/build/index.htlm"))
})