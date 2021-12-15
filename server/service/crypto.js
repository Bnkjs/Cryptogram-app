const axios = require('axios')
const apiUrlCoinByID = require('../service/apiUrls')

const cryptoExchange = (crypto_name, amount) => {
  return axios.get(apiUrlCoinByID.coinsById('eur') + crypto_name)
    .then((response) => {
        if(response.data[0]){
          return amount * response.data[0].current_price
        } else{
          res.status(404).json('Cet cryptomonnaie n\'éxiste pas')
        }
    })
}
//get all crypto 
const getAllCrypto = (crypto_name) => {
  return axios.get(apiUrlCoinByID.allCoins('eur'))
    .then((response) => {
        if(response.data[0]){
           return response.data
        } else{
            res.status(404).json('une erreur s\'est glissée..')
          }
    })
}


//get crypto id
const getCryptoSymbol = (crypto_name) => {
  return axios.get(apiUrlCoinByID.coinsById('eur') + crypto_name)
    .then((response) => {
        if(response.data[0]){
           return response.data[0].symbol
        } else{
            res.status(404).json('Cet cryptomonnaie n\'éxiste pas')
          }
    })
}

// crypto_name
const getCryptoName = (crypto_name) => {
  return axios.get(apiUrlCoinByID.coinsById('eur') + crypto_name)
  .then((response) => {
    if(response.data[0]){
      return response.data[0].name
    } else{
      res.status(404).json('Cet cryptomonnaie n\'éxiste pas')
    }
  })
} 

module.exports= {cryptoExchange,getCryptoSymbol,getCryptoName,getAllCrypto}