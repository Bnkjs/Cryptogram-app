const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')


router.get('/', authorization, async (req,res)=>{

      try {
        //1. find user
        const checkUserExist = await pool.query('SELECT email,username,avatar,investment,balance FROM users WHERE user_id = ($1)',[req.user])
        
        const userInvestmentInfos = await pool.query(`
        SELECT 
         user_investment_item.crypto_name,
         user_investment_item.crypto_id_name,
         user_investment_item.total_amount_of_converted_coin,
         user_investment_item.total_amount_of_coin_in_user_currency
       FROM user_investment
       INNER JOIN user_investment_item USING(investment_id)
       WHERE user_id = ($1);`,[req.user])

        if(checkUserExist.rows[0] === undefined){
            res.status(404).json('cet utilisateur n\'existe pas!')
        }else{
            res.json(userInvestmentInfos.rows)
        }
      } catch (error) {
        console.error('⛔ error ⛔: '+ error.message);
      }
})

module.exports = router;