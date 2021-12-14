const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const moment = require('moment')
const validInfosCrypto = require('../middleware/validInfosCryptos')
const apiUrlCoinByID = require('../service/apiUrls')
const axios = require('axios')

router.post('/', validInfosCrypto, authorization, async (req,res)=>{
  
  const date = moment().format('DD MMM YYYY H:mm')
  const generateTrackingId = Math.random().toString(36).substr(2, 40)
  const { crypto_name, amount, description, contact_id } = req.body
  const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
  const findContact = await pool.query('SELECT * FROM user_contact WHERE (contact_id,user_id) = ($1,$2)',[contact_id,req.user])
  
  try {

    if(checkUserExist.rows[0] === undefined){
      res.status(404).json('cet utilisateur n\'existe pas!')
  } else{
    const newtransfert = await pool.query('INSERT INTO user_transfert (user_id,tracking_id,wallet_adress,created_at) VALUES ($1,$2,$3,$4) RETURNING *',
    [req.user,generateTrackingId,checkUserExist.rows[0].wallet_adress,date])

      // amount converted
      const cryptoExchange = () => {
        return axios.get(apiUrlCoinByID.coinsById('eur') + crypto_name)
          .then((response) => {
              if(response.data[0]){
                return amount * response.data[0].current_price
              } else{
                res.status(404).json('Cet cryptomonnaie n\'éxiste pas')
              }
          })
      }
      const amountConvertedInCoins = await cryptoExchange().then(res => res)

      //get crypto id
      const getCryptoSymbol = () => {
        return axios.get(apiUrlCoinByID.coinsById('eur') + crypto_name)
        .then((response) => {
          if(response.data[0]){
            return response.data[0].symbol
          }else{
            res.status(404).json('Cet cryptomonnaie n\'éxiste pas')
          }
        })
      }
      const cryptoSymbol = await getCryptoSymbol().then(res => res)

      // crypto_name
      const getCryptoName = () => {
        return axios.get(apiUrlCoinByID.coinsById('eur') + crypto_name)
        .then((response) => {
          if(response.data[0]){
            return response.data[0].name
          } else{
            res.status(404).json('Cet cryptomonnaie n\'éxiste pas')
          }
        })
      }
      const cryptoName = await getCryptoName().then(res => res)

    const newTransfertItem = await pool.query('INSERT INTO user_transfert_item (transfert_id,crypto_name,crypto_id_name,amount_in_user_currency,amount_converted_in_coin,description,contact_id,contact_wallet_adress) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
    [newtransfert.rows[0].transfert_id,cryptoName,cryptoSymbol.toUpperCase(),amount,amountConvertedInCoins,description,findContact.rows[0].contact_id,findContact.rows[0].wallet_adress])
    
    const newUserBalance = await pool.query('UPDATE users SET balance = ($1) WHERE user_id = ($2) RETURNING *',[parseInt(checkUserExist.rows[0].balance) - amountExchangeInUserCurrency, req.user])
   
    

    res.json([newtransfert.rows[0],newTransfertItem.rows[0]])
  }
    

  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
})
module.exports = router