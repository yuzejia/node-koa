import * as mysql from "mysql2"
import mysqlConfig from "../../../config/db-config";
export default async (app)=> {
    
    const _mysqlConfig = mysqlConfig;

    try {
        const connection = mysql.createConnection(_mysqlConfig);
        connection.connect();
        console.log('mysql - success --');
        
        const c = {
            cyan: '\x1b[36m',
            red: '\x1b[31m',
            end: '\x1b[39m'
        }

        app.mysqlConMsg = `mysql connect success. host : ${c.cyan}${mysqlConfig.host}${c.end}`
        app.use(( ctx, next)=> {
            ctx.mysql = connection;
            return next()
        })

    } catch (error) {
        // process.emit("error", error)
    }
}