const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'app'
});
connection.query('SELECT * FROM users WHERE id = ?', [2], (err, users) => {

    if (err) console.log(err);

    console.log(users);

});


connection.connect(err => {

    if (err) console.log(err);

    console.log('Connected!');

});

connection.end(err => {

    if (err) console.log(err);

    console.log('Disconnected!');

});