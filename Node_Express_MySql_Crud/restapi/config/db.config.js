const mysql = require('mysql');

//creating mysql connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_mysql_crud_db'
});

dbConn.connect(function(error) {
    if (error) throw error;
    console.log('Database Connected succesfully');
});

module.exports = dbConn;