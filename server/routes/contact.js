const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const moment = require('moment')

router.post('/', authorization, async(req,res)=>{
  const date = moment().format('DD MMM YYYY H:m')
  const { email,firstname,lastname } = req.body
  const findContact = await pool.query('SELECT * FROM user_contact WHERE email = ($1)',[email])
try {
  if(findContact.rows.length === 0){
    const newContact = await pool.query('INSERT INTO user_contact (email,first_name,last_name,user_id,created_at) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [email, firstname, lastname, req.user, date ])
      res.json(newContact.rows[0])
  }
    else if(findContact.rows[0].email === email){
      res.status(403).json('Ce contact est déjà présent dans votre liste!')
    }
    
} catch (error) {
      console.error('⛔ error ⛔: '+ error.message);
}
})

module.exports = router;
