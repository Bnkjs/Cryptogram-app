const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const moment = require('moment')

router.post('/', authorization, async (req,res)=>{
  const findUser = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
  const date = moment().format('DD MMM YYYY H:m')
  const generateTransactionId = Math.random().toString(36).substr(2, 9)

  const { crypto_name, amount, card_name } = req.body
  try {
    const newOrder = await pool.query('INSERT INTO user_order (user_id,card_name,transaction_id,created_at) VALUES ($1,$2,$3,$4) RETURNING *',
    [req.user,card_name,generateTransactionId,date])
    
    const newOrderItem = await pool.query('INSERT INTO user_order_item (order_id,crypto_name,amount) VALUES ($1,$2,$3) RETURNING *',
    [newOrder.rows[0].order_id,crypto_name,amount])

    res.json([newOrder.rows[0],newOrderItem.rows[0]])

  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
})
module.exports = router