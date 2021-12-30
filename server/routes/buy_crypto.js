const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const moment = require('moment')
const validInfosCrypto = require('../middleware/validInfosCryptos')
const cryptoService = require('../service/crypto')


router.post('/',validInfosCrypto ,authorization, async (req,res)=>{
  const date = moment().format('DD MMM YYYY H:mm')
  const generateTransactionId = Math.random().toString(36).substr(2, 40)
  const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])

  const { crypto_name, amount } = req.body
 
  try {

    if(checkUserExist.rows[0] === undefined){
      res.status(404).json('cet utilisateur n\'existe pas!')
  } else{
 
      // amount converted
      const amountExchangeInUserCurrency = await cryptoService.cryptoExchange(crypto_name,amount).then(res => res)
      //get crypto id
      const cryptoSymbol = await cryptoService.getCryptoSymbol(crypto_name).then(res => res)
      // crypto_name
      const cryptoName = await cryptoService.getCryptoName(crypto_name).then(res => res)

      // -------------------- QUERIES DB -------------------- //
      // ---- ADD NEW ORDER ----  //
      const newOrder = await pool.query(`INSERT INTO user_order (user_id,transaction_id,status,wallet_adress,created_at) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [req.user,generateTransactionId,"paid",checkUserExist.rows[0].wallet_adress,date])
      // ---- ADD NEW ORDER ITEM ----  //
      const newOrderItem = await pool.query('INSERT INTO user_order_item (order_id,crypto_name,crypto_id_name,amount_in_user_currency,amount_converted_in_coin) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [newOrder.rows[0].order_id,cryptoName, cryptoSymbol.toUpperCase(),amountExchangeInUserCurrency,amount])
      
      // ---- CHECK IF USER HAVE THE COIN ----  //
      const checkIfUserHaveCoin = await pool.query('SELECT * FROM user_investment_item WHERE (crypto_name) = ($1)',[cryptoName])

        if(checkIfUserHaveCoin.rows[0] === undefined){
          // ---- ADD NEW INVESTMENT ----  //
          const newInvestment = await pool.query(`INSERT INTO user_investment (user_id,status,investment_tracking_id,wallet_adress,created_at) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
          [req.user,"* invested * ",generateTransactionId,checkUserExist.rows[0].wallet_adress,date])

          //  ---- IF ITEM NOT EXIST ADD NEW INVESTMENT ITEM ----  //
          const newInvestmentItem = await pool.query(`
            INSERT INTO user_investment_item(  
                crypto_name, crypto_id_name, amount_in_user_currency, amount_converted_in_coin, 
                total_amount_of_coin_in_user_currency, total_amount_of_converted_coin, investment_id)
            VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
            [cryptoName,cryptoSymbol.toUpperCase(),amountExchangeInUserCurrency,amount,amountExchangeInUserCurrency,
            amount,newInvestment.rows[0].investment_id])
        } else{
          // ---- IF ALREADY EXITS UPDATE INVESTMENT ITEM ----  //
            const updateInvestmentItem = await pool.query(`
            UPDATE user_investment_item 
            SET (
              total_amount_of_coin_in_user_currency,total_amount_of_converted_coin) = ($1,$2) 
              WHERE crypto_name = ($3) RETURNING *`,
            [parseFloat(checkIfUserHaveCoin.rows[0].total_amount_of_coin_in_user_currency) + amountExchangeInUserCurrency, parseFloat(checkIfUserHaveCoin.rows[0].total_amount_of_converted_coin) + parseFloat(amount), cryptoName])
            // UPDATE USER_INVESTMENT DATE
            const updateInvestmentDate = await pool.query('UPDATE user_investment SET updated_at = ($1) WHERE (user_id) = ($2)',[date,req.user])
        }
 
        // ---- UPDATE USER BALANCE AFTER NEW ORDER ITEM ----  //
      const newUserInvestment = await pool.query('UPDATE users SET investment = ($1) WHERE user_id = ($2) RETURNING *',[parseFloat(checkUserExist.rows[0].investment) + amountExchangeInUserCurrency, req.user])
      const newUserBalance = await pool.query('UPDATE users SET balance = ($1) WHERE user_id = ($2) RETURNING balance',[parseFloat(checkUserExist.rows[0].balance) - amountExchangeInUserCurrency, req.user])
      res.json({ order: newOrder.rows[0], order_item: newOrderItem.rows[0], user_balance: newUserBalance.rows[0]})
    }

  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
})
module.exports = router