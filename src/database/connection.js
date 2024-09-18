const mysql = require('mysql2');

const connetion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'admin',
    database: 'clientsbd'
});

module.exports = connetion