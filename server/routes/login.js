const router = require('express').Router()
const bcrypt = require('bcrypt')
const pool = require('../db')
const jwtGenerator = require('../jwtGenerator')
const authorization = require('../middleware/authorization')


router.post('/', async (req,res)=>{
  
  // 1. destructure req.body
  const {email,password} = req.body
  
  try {
    
    // 2. find user where email match user db
    const checkUserExist = await pool.query('SELECT * FROM users WHERE email=($1)',
    [email])

    if(checkUserExist.rows[0] === undefined){
      res.status(401).json('l\'email ou le mot de passe est incorrect')
    }else{
      //3. compare password db
      const validPassport = await bcrypt.compare(password, checkUserExist.rows[0].password)
      
      if(!validPassport){
        res.status(401).json('l\'email ou le mot de passe est incorrect');
      }else{
          // 4. generate token 
          const token = jwtGenerator(checkUserExist.rows[0].user_id)
          res.json({token})
      }
    }
    
  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
    res.status(401).json('l\'email ou le mot de passe est incorrect');
  }

  router.get('/is-verify', authorization, (req,res)=>{
    try {
      res.json(true)
    } catch (error) {
      console.error('⛔ error ⛔: '+ error.message);
    }
  })
})
module.exports = router
