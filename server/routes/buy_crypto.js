const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const moment = require('moment')
const validInfosCrypto = require('../middleware/validInfosCryptos')
const axios = require('axios')
const cryptoApiUrl = require('../service/apiUrls')

router.post('/',validInfosCrypto ,authorization, async (req,res)=>{
  const date = moment().format('DD MMM YYYY H:mm')
  const generateTransactionId = Math.random().toString(36).substr(2, 40)
  const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
  
  const { crypto_name, amount, card_name } = req.body
 
  try {

    if(checkUserExist.rows[0] === undefined){
      res.status(404).json('cet utilisateur n\'existe pas!')
  } else{

      // amount converted
      const cryptoExchange = () => {
        return axios.get(cryptoApiUrl.coinsById + crypto_name)
        .then((response) => {
          return amount * response.data[0].current_price
        })
      }
      const amountConverted = await cryptoExchange().then(res => res)

      //get crypto id
      const getCryptoSymbol = () => {
        return axios.get(cryptoApiUrl.coinsById + crypto_name)
        .then((response) => {
          return response.data[0].symbol
        })
      }
      const cryptoSymbol = await getCryptoSymbol().then(res => res)
      console.log(cryptoSymbol);


      const newOrder = await pool.query('INSERT INTO user_order (user_id,card_name,transaction_id,status,created_at) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [req.user,card_name,generateTransactionId,true,date])

      const newOrderItem = await pool.query('INSERT INTO user_order_item (order_id,crypto_name,crypto_id_name,amount) VALUES ($1,$2,$3,$4) RETURNING *',
      [newOrder.rows[0].order_id,crypto_name, cryptoSymbol.toUpperCase(),amountConverted])
      res.json({ order: newOrder.rows[0], order_item: newOrderItem.rows[0]})
    }

  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
})
module.exports = router