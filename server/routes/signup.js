const router = require('express').Router()
const bcrypt = require('bcrypt')
const pool = require('../db')
const jwtGenerator = require('../jwtGenerator')
const moment = require('moment')

router.post('/', async (req,res)=>{
  
  // 1. destructure req.body
  const {email, password, first_name, last_name} = req.body
  const date = moment().format('DD MMM YYYY')
  
  
  try {
    // 2. add bcrypt to password
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password,salt)

    // 3. check if user exist in db
    const checkUserExist = await pool.query('SELECT * FROM users WHERE email=($1)',[email])
    
    if(checkUserExist.rows[0] === undefined){

      // 4. add req.body to db
      const newUser = await pool.query('INSERT INTO users (email, password, first_name, last_name, created_at) VALUES($1,$2,$3,$4,$5) RETURNING *',
      [email,bcryptPassword,first_name,last_name,date])
       
      //5. generate token
       const token = jwtGenerator(newUser.rows[0].id)

       //6. send token to res
       res.json({token})

    } else{
      res.status(401).json('un utilisateur existe dejà avec cet email..')
    }

  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
    res.status(404).json("Verifiez votre email/mot de passe 🤔")
  }
})

module.exports = router
