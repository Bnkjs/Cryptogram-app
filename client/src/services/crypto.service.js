import axios from "axios"

const cryptoUrls = {
  allCoins: 'https://coingecko.p.rapidapi.com/coins/markets'
}

const coins = (hook) => {
  return axios.get(cryptoUrls.allCoins,{
    params: {vs_currency: 'eur', page: '1', per_page: '10', order: 'market_cap_desc'},
    headers: {
      'x-rapidapi-host': 'coingecko.p.rapidapi.com',
      'x-rapidapi-key': '7e7d240d52msh38e0b75a362405dp15350djsncc1e69e717c8'
    }
  })
}

export default coins