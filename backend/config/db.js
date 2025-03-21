const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "990338613ooga",
  database: "myserver" 
});

module.exports = pool;
