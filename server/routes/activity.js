// const router = require('express').Router()
// const pool = require('../db')
// const authorization = require('../middleware/authorization')
// const moment = require('moment')

// router.post('/', authorization, async (req,res)=>{
//   const findUser = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
//   const date = moment().format('DD MMM YYYY H:m')
//   const { crypto_name, amount, card_name } = req.body
//   try {
//     const newtransfert = await pool.query('INSERT INTO user_transfert (user_id,card_name,created_at) VALUES ($1,$2,$3) RETURNING *',
//     [findUser.rows[0].user_id,card_name,date])
    
//     const newtransfertItem = await pool.query('INSERT INTO user_transfert_item (transfert_id,crypto_name,amount,description,contact_id) VALUES ($1,$2,$3,$4,$5) RETURNING *',
//     [newtransfert.rows[0].transfert_id,crypto_name,amount,'Anniversaire Yannou',1])

//     res.json([newtransfert.rows[0],newtransfertItem.rows[0]])

//   } catch (error) {
//     console.error('⛔ error ⛔: '+ error.message);
//   }
// })
// module.exports = router