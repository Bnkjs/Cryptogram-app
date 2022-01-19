const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')


router.get('/', authorization, async (req,res)=>{

      try {
        //1. find user
        const checkUserExist = await pool.query('SELECT email,username,avatar,investment,balance FROM users WHERE user_id = ($1)',[req.user])
        const userContact = await pool.query('SELECT * FROM user_contact WHERE user_id = ($1)',[req.user])
        const userTransfertInfos = await pool.query('SELECT * FROM user_transfert WHERE user_id = ($1);',[req.user])
        const userInvestmentInfos = await pool.query('SELECT * FROM user_investment WHERE user_id = ($1);',[req.user])
          
        if(checkUserExist.rows[0] === undefined){
            res.status(404).json('cet utilisateur n\'existe pas!')
       } else{
            res.json({ user: checkUserExist.rows[0], contact: userContact.rows.length, investment: userInvestmentInfos.rows.length, transfert: userTransfertInfos.rows.length})
        }
      } catch (error) {
        console.error('⛔ error ⛔: '+ error.message);
      }
})

module.exports = router;