const router = require('express').Router()
const pool = require('../db')
const authorization = require('../middleware/authorization')
const bcrypt = require('bcrypt')


router.put('/', authorization, async(req,res)=>{
  try {
    const { password } = req.body
    const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
    
    if(checkUserExist.rows[0].length === 0){
      res.status(404).json('cet utilisateur n\'existe pas!')
    } else{
    
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password,salt)

    const newPassword = await pool.query('UPDATE users SET password = ($1) WHERE user_id = ($2) RETURNING *',[bcryptPassword,checkUserExist.rows[0].user_id])
    
    res.json('Votre mot de passe a bien été modifié 🤩 ')
    } 
    
  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
    res.status(403).json('vous n\'êtes pas autorisé à effectuer cette action..')
  }
})

router.post('/', authorization, async(req,res)=>{
  try {
    const { avatar } = req.body
    const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
    
    if(checkUserExist.rows[0].length === 0){
      res.status(404).json('cet utilisateur n\'existe pas!')
    } else{
      const newAvatar = await pool.query('UPDATE users SET avatar = ($1) WHERE user_id = ($2)',[avatar,checkUserExist.rows[0].user_id])
      res.json('Votre avatar a bien été modifié 🤩 ')
    }
  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
    res.status(403).json('vous n\'êtes pas autorisé à effectuer cette action..')
  }
})

router.delete('/', authorization, async(req,res)=>{
  try {
    const checkUserExist = await pool.query('SELECT * FROM users WHERE user_id = ($1)',[req.user])
    
    if(checkUserExist.rows[0].length === 0){
      res.status(404).json('cet utilisateur n\'existe pas!')
    } else{
      const delUser = await pool.query('DELETE FROM users WHERE user_id = ($1)',[checkUserExist.rows[0].user_id])
      res.json('Votre profil a bien été supprimé 🥲.. ')
    }
  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
    res.status(403).json('vous n\'êtes pas autorisé à effectuer cette action..')
  }
})

module.exports = router; 