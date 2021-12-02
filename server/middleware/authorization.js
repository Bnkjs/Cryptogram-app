const jwt = require('jsonwebtoken')
require('dotenv').config()

//  exporter le module sans var 
module.exports = (req,res,next) => {

  try {
    //1. verifier le token dans le header
    const jwtToken = req.header("token") 
    //1.5 si token pas valid renvoyer erreur
    if(!jwtToken || jwtToken === undefined){
      res.status(403).json('vous n\'êtes pas autorisé à effectuer cette action..')
    }
    //2. on va verifier le token et le jwtSecret
    const payload = jwt.verify(jwtToken,process.env.jwtSecret)

    req.user  = payload.user // user_id

  } catch (error) {
    console.error('⛔ error ⛔: '+ error.message);
  }
  next()
}

