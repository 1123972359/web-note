const mysql = require('mysql')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
})

const query = function (sql, callback) {
    pool.getConnection((err, conn) => {
        if (err) {
            callback(err, null)
        } else {
            conn.query(sql, (err, result) => {
                conn.release(); // 归还连接池
                callback(err, result)
            })
        }
    })
}

module.exports = query;