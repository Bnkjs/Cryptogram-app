
const allCoins = (currency) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`
const coinsById = (currency) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=`


module.exports = {allCoins,coinsById}