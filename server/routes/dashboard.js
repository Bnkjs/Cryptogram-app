const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')


router.get('/', authorization, async (req,res)=>{
      try {
        //1. find user
        const findUser = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
        const findOrder = await pool.query('SELECT * FROM user_order WHERE user_id = ($1)',[req.user])
        const findTransfert = await pool.query('SELECT * FROM user_transfert WHERE user_id = ($1)',[req.user])
        
        
        if(findUser.rows[0] === undefined){
            res.status(404).json('cet utilisateur n\'existe pas!')
       } else{
            res.json({ user: findUser.rows[0], order: findOrder.rows, transfert: findTransfert.rows })    
        }
      
      } catch (error) {
        console.error('⛔ error ⛔: '+ error.message);
      }
})

module.exports = router;