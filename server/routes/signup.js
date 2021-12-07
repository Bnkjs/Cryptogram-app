const router = require('express').Router()
const bcrypt = require('bcrypt')
const pool = require('../db')
const jwtGenerator = require('../jwtGenerator')
const moment = require('moment')

router.post('/', async (req,res)=>{
  
  const date = moment().format('DD MMM YYYY H:mm')
  try {
    const {email, password, first_name, last_name} = req.body
    const checkUserExist = await pool.query('SELECT * FROM users WHERE email=($1)',[req.user])
  
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password,salt)

    if(checkUserExist.rows[0] === undefined){
      const newUser = await pool.query('INSERT INTO users (email, password, first_name, last_name,created_at) VALUES($1,$2,$3,$4,$5) RETURNING *',
      [email,bcryptPassword,first_name,last_name,date])
       
       const token = jwtGenerator(newUser.rows[0].id)

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
