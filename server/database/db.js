const mysql = require('mysql2');

// 커넥션 풀을 설정 
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysqlpw',
    database: 'Project',
    waitForConnections: true, // 사용 가능한 connection이 없으면 기다릴지 여부 
    connectionLimit: 4  // 최대 연결 가능한 pool 갯수 
})

module.exports = pool