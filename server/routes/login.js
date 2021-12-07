const router = require('express').Router()
const bcrypt = require('bcrypt')
const pool = require('../db')
const jwtGenerator = require('../jwtGenerator')
const authorization = require('../middleware/authorization')
const validInfosUser = require('../middleware/validInfosUser')


router.post('/', validInfosUser, async (req,res)=>{
  const {email,password} = req.body
  const checkUserExist = await pool.query('SELECT * FROM users WHERE email=($1)',[email])


  try {
    if(checkUserExist.rows[0] === undefined){
      res.status(401).json('l\'email ou le mot de passe est incorrect')
    }else{
      const validPassport = await bcrypt.compare(password, checkUserExist.rows[0].password)
      if(!validPassport){
        res.status(401).json('l\'email ou le mot de passe est incorrect');
      }else{   
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
