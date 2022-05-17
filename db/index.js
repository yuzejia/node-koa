import mysql  from 'mysql2';
import {YZJ_TEST_CONFIG} from "../config/db-config.js"
const connection = mysql.createConnection({...YZJ_TEST_CONFIG});

connection.connect((err)=> {
    if(err) {
        console.log(err);
    } 
});
console.log('mysql 成功--------');
export default connection;