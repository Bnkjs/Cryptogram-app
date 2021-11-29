const router = require('express').Router()
const bcrypt = require('bcrypt')
const pool = require('../db')


router.post('/signup', async (req,res)=>{
  
  // 1. destructure req.body
  const {email, password, first_name, last_name} = req.body
  
  try {
    // 2. add bcrypt to password
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password,salt)

    // 3. add req.body to db
    
    const newUser = pool.query('INSERT INTO users (email, password, first_name, last_name) VALUES ($1,$2,$3)'
    [email,bcryptPassword, first_name, last_name])
    
    //4. generate token 

  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
})

module.exports = router
