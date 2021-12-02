const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const moment = require('moment')

const date = moment().format('DD MMM YYYY H:mm')
const generateTransactionId = Math.random().toString(36).substr(2, 40)

router.post('/', authorization, async (req,res)=>{
  const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
  const { crypto_name, amount, card_name } = req.body

  try {
    if(checkUserExist.rows[0] === undefined){
      res.status(404).json('cet utilisateur n\'existe pas!')
  } else{
      const newOrder = await pool.query('INSERT INTO user_order (user_id,card_name,transaction_id,created_at) VALUES ($1,$2,$3,$4) RETURNING *',
      [req.user,card_name,generateTransactionId,date])
      
      const newOrderItem = await pool.query('INSERT INTO user_order_item (order_id,crypto_name,amount) VALUES ($1,$2,$3) RETURNING *',
      [newOrder.rows[0].order_id,crypto_name,amount])

      res.json([newOrder.rows[0],newOrderItem.rows[0]])  
    }

    

  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
})
module.exports = router