const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')


router.get('/', authorization, async (req,res)=>{

      try {
        //1. find user
        const checkUserExist = await pool.query('SELECT email,username,avatar,investment,balance FROM users WHERE user_id = ($1)',[req.user])
        const userContact = await pool.query('SELECT * FROM user_contact WHERE user_id = ($1)',[req.user])
        const userOrderInfos = await pool.query(`
          SELECT 
            user_order.order_id,
            user_order_item.crypto_name,
            user_order_item.amount_in_user_currency,
            user_order_item.amount_converted_in_coin,
            user_order_item.crypto_id_name,
            user_order.created_at
          FROM user_order
          INNER JOIN user_order_item USING(order_id)
          WHERE user_id = ($1);`,[req.user])

          const userTransfertInfos = await pool.query(`
            SELECT 
              user_transfert.transfert_id,
              user_transfert_item.crypto_name,
              user_transfert_item.amount_in_user_currency,
              user_transfert_item.amount_converted_in_coin,
              user_transfert.created_at
            FROM user_transfert
            INNER JOIN user_transfert_item USING(transfert_id)
            WHERE user_id = ($1);`,[req.user])

          const userInvestmentInfos = await pool.query(`
           SELECT 
            user_investment.investment_id,
            user_investment_item.crypto_name,
            user_investment_item.crypto_id_name,
            user_investment_item.amount_in_user_currency,
            user_investment_item.amount_converted_in_coin,
            user_investment_item.total_amount_of_coin_in_user_currency,
            user_investment_item.total_amount_of_converted_coin,
            user_investment.created_at,
            user_investment.updated_at
          FROM user_investment
          INNER JOIN user_investment_item USING(investment_id)
          WHERE user_id = ($1);`,[req.user])
          
        if(checkUserExist.rows[0] === undefined){
            res.status(404).json('cet utilisateur n\'existe pas!')
       } else{
            res.json({ user: checkUserExist.rows[0], contact: userContact.rows.length ,order: userOrderInfos.rows, transfert: userTransfertInfos.rows, investment: userInvestmentInfos.rows})
        }
      } catch (error) {
        console.error('⛔ error ⛔: '+ error.message);
      }
})

module.exports = router;