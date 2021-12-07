const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const moment = require('moment')
const validInfosContact = require('../middleware/validInfosContact')
const date = moment().format('DD MMM YYYY H:m')

router.post('/', validInfosContact, authorization , async(req,res)=>{
  const { email,firstname,lastname } = req.body
  const findUserContact = await pool.query('SELECT * FROM user_contact WHERE email = ($1)',[email])

try {
  if(findUserContact.rows[0] === undefined){
    const newContact = await pool.query('INSERT INTO user_contact (email,first_name,last_name,user_id,created_at) VALUES ($1,$2,$3,$4,$5) RETURNING *',
      [email,firstname,lastname,req.user,date ])
      res.json(newContact.rows[0])
  }else if(findUserContact.rows[0].email === email){
      res.status(403).json('Ce contact est déjà présent dans votre liste!')
    }
    
} catch (error) {
      console.error('⛔ error ⛔: '+ error.message);
}
})

router.delete('/', authorization, async(req,res)=>{
  const { email } = req.body
  const findUserContact = await pool.query('SELECT * FROM user_contact WHERE email = ($1)',[email])
try {
  if(findUserContact.rows[0] === undefined){
    res.status(404).json('Ce contact n\'existe pas!')
  } else{
    const delContact = await pool.query('DELETE FROM user_contact WHERE email = ($1)',[email])
    res.json('Ce contact a bien été supprimé !! ')
  }
    
} catch (error) {
      console.error('⛔ error ⛔: '+ error.message);
}
})

module.exports = router;
