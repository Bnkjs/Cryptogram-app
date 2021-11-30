const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')



router.get('/', authorization, async (req,res)=>{
      try {
        //1. find user
        const findUser = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
       if(findUser.rows[0] === undefined){
        res.status(403).json('vous n\'êtes pas autorisé à effectuer cette action..')
       } else{
        res.json(findUser.rows[0])
       }
        
      } catch (error) {
        console.error('⛔ error ⛔: '+ error.message);
      }
})

module.exports = router;