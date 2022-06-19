const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySql username
        user: 'root',
        //Your MySQl password
        password: '',
        database: 'election',
    },
    console.log('Connected to the election database')
);

module.exports = db;