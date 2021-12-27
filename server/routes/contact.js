const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const moment = require('moment')
const validInfosContact = require('../middleware/validInfosContact')


router.get('/', authorization, async (req,res) => {
  try {
     if(req.user){
       const findContact = await pool.query('SELECT * FROM user_contact WHERE user_id = ($1)',[req.user])
       if(findContact.rows[0] === undefined){
         res.status(404).json('Aucun contact n\'est enregistré pour le moment')
       } else{
         res.json(findContact.rows)
       }
     }
  } catch (error) {
      console.error('⛔ error ⛔: '+ error.message);
  }
})

router.get('/:id', authorization, async (req,res) => {
  const { id } = req.params
  try {
     if(req.user){
       const findContact = await pool.query('SELECT * FROM user_contact WHERE contact_id = ($1)',[id])
       if(findContact.rows[0] === undefined){
         res.status(404).json('Ce contact n\'existe pas!')
       } else{
         res.json(findContact.rows)
       }
     }
  } catch (error) {
      console.error('⛔ error ⛔: '+ error.message);
  }
})

router.post('/', validInfosContact, authorization , async(req,res)=>{
 
  const date = moment().format('DD MMM YYYY H:mm')
  const { email,firstname,lastname } = req.body
  const findContactByEmail = await pool.query('SELECT * FROM user_contact WHERE email = ($1)',[email])
  const getUserContact = await pool.query('SELECT * FROM user_contact WHERE user_id = ($1)',[req.user])

  try {
    if(findContactByEmail.rows[0] === undefined){
      const newContact = await pool.query('INSERT INTO user_contact (email,first_name,last_name,user_id,created_at) VALUES ($1,$2,$3,$4,$5) RETURNING *',
        [email,firstname,lastname,req.user,date ])
        res.json(getUserContact.rows)
    }  else if(findContactByEmail.rows[0].first_name === firstname){
        res.status(403).json('Ce prénom est déjà présent dans votre liste!')
      } 
  } catch (error) {
        console.error('⛔ error ⛔: '+ error.message);
    }
  })
  

router.delete('/', authorization, async(req,res)=>{
  const { email } = req.body
  const findContact = await pool.query('SELECT * FROM user_contact WHERE email = ($1)',[email])
  try {
    if(findContact.rows[0] === undefined){
      res.status(404).json('Ce contact n\'existe pas!')
    } else{
      const delContact = await pool.query('DELETE FROM user_contact WHERE email = ($1)',[email])
      res.json('Ce contact a bien été supprimé !!  ')
    } 
  } catch (error) {
        console.error('⛔ error ⛔: '+ error.message);
  }
})

router.delete('/all', authorization, async(req,res)=>{
  const findContact = await pool.query('SELECT * FROM user_contact WHERE user_id = ($1)',[req.user])
  try {
    if(findContact.rows[0] === undefined){
      res.status(404).json('Aucun contact n\'est enregistré pour le moment')
    } else{
      const delAllContacts = await pool.query('DELETE FROM user_contact WHERE user_id = ($1)',[req.user])
      res.json('Tous vos contacts ont bien étés supprimés !!')
    }   
  } catch (error) {
        console.error('⛔ error ⛔: '+ error.message);
  }
})

module.exports = router;
