const router = require('express').Router()
const cryptoService = require('../service/crypto')
const getAllCrypto = require('../service/crypto')
router.get('/', (req,res)=>{
  
  getAllCrypto.getAllCrypto().then((response)=>{
    res.json(response)
  })
})

module.exports = router