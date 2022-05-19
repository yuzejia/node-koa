import * as mysql  from 'mysql2';
import mysqlConfig from '../config/db-config';

const connection = mysql.createConnection({...mysqlConfig});

connection.connect((err)=> {
    if(err) {
        console.log(err);
    } 
});
console.log('mysql 成功--------');
export default connection;