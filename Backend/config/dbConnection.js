// dbConnection.js
import mysql from 'mysql2';

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: 3306,
});

db.connect((err) => {
    if (err) {
        // console.error('Database connection failed:', err.stack);
        console.error('Database connection failed');
        return;
    }
    // console.log('Connected to MySQL database as ID', db.threadId);
    console.log('Connected to MySQL database');
});

export default db;
