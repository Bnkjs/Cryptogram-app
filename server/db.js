const pool = require('pg').Pool

const newPool = new pool({
  user: "macbookpro",
  password: "",
  host: "localhost",
  port: 5432,
  database: "crypto-app-db"
})

module.exports = newPool;