const pool = require('pg').Pool

const newPool = new pool({
  user: "macbookpro",
  password: "",
  host: "localhost",
  port: '5432',
  database: "crypto_app"
})

module.exports = newPool;