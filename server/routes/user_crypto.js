const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')


router.get('/', authorization, async (req,res)=>{

      try {
        //1. find user
        const checkUserExist = await pool.query('SELECT email,username,avatar,investment,balance FROM users WHERE user_id = ($1)',[req.user])
        const userInvestment = await pool.query('SELECT investment_id FROM user_investment WHERE user_id = ($1);',[req.user])
        const mappedInvest = userInvestment.rows.map(async (el) => 
          await pool.query('SELECT crypto_name FROM user_investment_item WHERE investment_id = ($1);',[el.investment_id])
          .then(res => res.rows[0].crypto_name)
          )
        let arrInvest = [];
        const resultInvest = mappedInvest.map(el => el.then(res => res))
        arrInvest.push(resultInvest)
        if(checkUserExist.rows[0] === undefined){
            res.status(404).json('cet utilisateur n\'existe pas!')
        }else{
            res.json(arrInvest)
        }
      } catch (error) {
        console.error('⛔ error ⛔: '+ error.message);
      }
})

module.exports = router;