const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const moment = require('moment')
const validInfosCrypto = require('../middleware/validInfosCryptos')



router.post('/', validInfosCrypto, authorization, async (req,res)=>{
  const date = moment().format('DD MMM YYYY H:mm')
  const generateTrackingId = Math.random().toString(36).substr(2, 40)
  const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
  const { crypto_name, amount,description ,card_name } = req.body
  
  try {

    if(checkUserExist.rows[0] === undefined){
      res.status(404).json('cet utilisateur n\'existe pas!')
  } else{
    const newtransfert = await pool.query('INSERT INTO user_transfert (user_id,card_name,tracking_id,wallet_adress,created_at) VALUES ($1,$2,$3,$4,$5) RETURNING *',
    [req.user,card_name,generateTrackingId,checkUserExist.rows[0].wallet_adress,date])
    
    const newtransfertItem = await pool.query('INSERT INTO user_transfert_item (transfert_id,crypto_name,amount,description,contact_id) VALUES ($1,$2,$3,$4,$5) RETURNING *',
    [newtransfert.rows[0].transfert_id,crypto_name,amount,description,1])

    res.json([newtransfert.rows[0],newtransfertItem.rows[0]])
  }
    

  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
})
module.exports = router