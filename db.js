var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: '175.27.138.124',
    user: 'yzjtest',
    password: 'Yzj123456.',
    database: 'yzjdb'
});

connection.connect((err)=> {
    if(err) {
        console.log(err);
    } 
});

connection.query('SELECT name from user_info', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});