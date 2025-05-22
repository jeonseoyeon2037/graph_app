const { Pool } = require("pg");
const dotenv = require("dotenv").config();

// 연결 정보
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});

// 연결 확인
module.exports = { pool };
