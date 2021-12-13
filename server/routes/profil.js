const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const bcrypt = require('bcrypt')


router.put('/', authorization, async(req,res)=>{
  try {
    const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
    const { password } = req.body
  
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password,salt)

    if(checkUserExist.rows[0] === undefined){
        res.status(404).json('cet utilisateur n\'existe pas!')
    }else{
        const newPassword = await pool.query('UPDATE users SET password = ($1) WHERE user_id = ($2) RETURNING *',[bcryptPassword,req.user])
      }
     const validPassport = await bcrypt.compare(bcryptPassword, checkUserExist.rows[0].password)
      console.log(validPassport);
    if(!validPassport){
      res.status(403).json('le nouveau mot de passe est identique à l\'ancien')
    }else{
      res.json('Votre mot de passe a bien été modifié 🤩 ')
    }
    
    
  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
})

router.post('/', authorization, async(req,res)=>{
  try {
    const { avatar, username } = req.body
    const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
    
    if(checkUserExist.rows[0] === undefined){
      res.status(404).json('cet utilisateur n\'existe pas!')
    } else{
        const newAvatar = await pool.query('UPDATE users SET avatar = ($1) WHERE user_id = ($2)',[avatar,checkUserExist.rows[0].user_id])
        const newUserName = await pool.query('UPDATE users SET userName = ($1) WHERE user_id = ($2)',[username,checkUserExist.rows[0].user_id])
        res.json('Votre profil a bien été modifié 🤩 ')
    }
  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
})

router.delete('/', authorization, async(req,res)=>{
  try {
    const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
    if(checkUserExist.rows[0] === undefined){
      res.status(404).json('cet utilisateur n\'existe pas!')
    } else{
      const delUser = await pool.query('DELETE FROM users WHERE user_id = ($1)',[req.user])
      res.json('Votre profil a bien été supprimé 🥲.. ')
    }
  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
})

module.exports = router; 
