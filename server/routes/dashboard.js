const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')


router.get('/', authorization, async (req,res)=>{
      try {
        //1. find user
        const findUser = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
        
        const userOrderInfos = await pool.query(`SELECT 
          user_order.order_id,
          user_order_item.crypto_name,
          user_order_item.amount,
          user_order.created_at

          FROM user_order
          INNER JOIN user_order_item USING(order_id)
          WHERE user_id = ($1);`,[req.user])

          const userTransfertInfos = await pool.query(`SELECT 
          user_transfert.transfert_id,
          user_transfert_item.crypto_name,
          user_transfert_item.amount,
          user_transfert.created_at

          FROM user_transfert
          INNER JOIN user_transfert_item USING(transfert_id)
          WHERE user_id = ($1);`,[req.user])
          

        if(findUser.rows[0] === undefined){
            res.status(404).json('cet utilisateur n\'existe pas!')
       } else{
            res.json({ user: findUser.rows[0], order: userOrderInfos.rows, transfert: userTransfertInfos.rows  })    
        }
      
      } catch (error) {
        console.error('⛔ error ⛔: '+ error.message);
      }
})

module.exports = router;