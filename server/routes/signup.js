const router = require('express').Router()
const bcrypt = require('bcrypt')
const pool = require('../db')
const jwtGenerator = require('../jwtGenerator')
const moment = require('moment')
const validInfosUser = require('../middleware/validInfosUser')

router.post('/', validInfosUser, async (req,res)=>{
  
  const date = moment().format('DD MMM YYYY H:mm')
  try {
    const {email, password, first_name, last_name} = req.body
    const checkUserExist = await pool.query('SELECT * FROM users WHERE email=($1)',[email])
  
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password,salt)

    if(checkUserExist.rows[0] === undefined){
      const newUser = await pool.query('INSERT INTO users (email, password, first_name, last_name,created_at) VALUES($1,$2,$3,$4,$5) RETURNING *',
      [email,bcryptPassword,first_name,last_name,date])
       
      const returningNewUserInfo = await pool.query('SELECT email,first_name, last_name FROM users WHERE email=($1)',[email])

       const token = jwtGenerator(newUser.rows[0].user_id)
       res.json({token: token, user: returningNewUserInfo.rows[0]})

    } else if(checkUserExist.rows[0].email === email){
      res.status(401).json('un utilisateur existe dejà avec cet email..')
    }

  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
    res.status(404).json("Verifiez votre email/mot de passe 🤔")
  }
})

module.exports = router
