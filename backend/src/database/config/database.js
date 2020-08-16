const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "jwttutorial",
  password: process.env.POSTGRESS_PASSWORD,
  port: 5432,
});

module.exports = pool;
