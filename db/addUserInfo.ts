import { USER_INFO } from "./db-config";
import connection from "./index";

export default (body) => {
  return new Promise((resolve, reject) => {
    var  addSql = `INSERT INTO ${USER_INFO}(Id,name) VALUES(0,?)`;
    var  addSqlParams = [`${body.name}`];
    
    connection.query(addSql,addSqlParams, function (error, results, fields) {
      if(error){
        console.log('[INSERT ERROR] - ',error.message);
        return;
       }        

      console.log('--------------------------INSERT----------------------------');
      //console.log('INSERT ID:',result.insertId);        
      console.log('INSERT ID:',results);        
      console.log('-----------------------------------------------------------------\n\n'); 
      resolve(results)
    });
  });
};
