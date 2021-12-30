const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const moment = require('moment')
const validInfosCrypto = require('../middleware/validInfosCryptos')
const cryptoService = require('../service/crypto')

router.post('/', validInfosCrypto, authorization, async (req,res)=>{
  
  const date = moment().format('DD MMM YYYY H:mm')
  const generateTrackingId = Math.random().toString(36).substr(2, 40)
  const { crypto_name, amount, description, contact_id } = req.body
  const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
  const findContact = await pool.query('SELECT * FROM user_contact WHERE (contact_id,user_id) = ($1,$2)',[contact_id,req.user])
  const userInvestmentInfos = await pool.query(`
        SELECT 
         user_investment_item.crypto_name,
         user_investment_item.crypto_id_name
       FROM user_investment
       INNER JOIN user_investment_item USING(investment_id)
       WHERE user_id = ($1);`,[req.user])

       const arr = await userInvestmentInfos.rows.map(el => el.crypto_name.toLowerCase())
       const checkIfUserHaveCoin = arr.includes(crypto_name)
       console.log(checkIfUserHaveCoin);
  
  try {

    if(checkUserExist.rows[0] === undefined){
      res.status(404).json('cet utilisateur n\'existe pas!')
  }else if(findContact.rows[0] === undefined){
    res.status(404).json('Ce contact n\'existe pas dans votre liste')
  } else if(arr === undefined){
      res.status(404).json('Cette crypto-monnaie n\'est pas disponible dans votre poretefeuille')
  }else{
    const newtransfert = await pool.query('INSERT INTO user_transfert (user_id,tracking_id,wallet_adress,created_at) VALUES ($1,$2,$3,$4) RETURNING *',
    [req.user,generateTrackingId,checkUserExist.rows[0].wallet_adress,date])

      // amount converted
      const amountExchangeInUserCurrency = await cryptoService.cryptoExchange(crypto_name,amount).then(res => res)
      //get crypto id
      const cryptoSymbol = await cryptoService.getCryptoSymbol(crypto_name).then(res => res)
      // crypto_name
      const cryptoName = await cryptoService.getCryptoName(crypto_name).then(res => res)

    const newTransfertItem = await pool.query('INSERT INTO user_transfert_item (transfert_id,crypto_name,crypto_id_name,amount_in_user_currency,amount_converted_in_coin,description,contact_id,contact_wallet_adress) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
    [newtransfert.rows[0].transfert_id,cryptoName,cryptoSymbol.toUpperCase(),amountExchangeInUserCurrency,amount,description,findContact.rows[0].contact_id,findContact.rows[0].wallet_adress])
    
    const newUserBalance = await pool.query('UPDATE users SET balance = ($1) WHERE user_id = ($2) RETURNING *',[parseFloat(checkUserExist.rows[0].balance) - amountExchangeInUserCurrency, req.user])
   

    res.json([newtransfert.rows[0],newTransfertItem.rows[0]])
  }
    

  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
})
module.exports = router