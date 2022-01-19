const pool = require('pg').Pool
require("dotenv").config()

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PSW,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DB
}
// connection string 
const proConfig = {
  connectionString: process.env.DATABASE_URL // HEREOKU ADDON
}

const newPool = new pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
)
module.exports = newPool;