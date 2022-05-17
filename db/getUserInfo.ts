import { USER_INFO } from "./db-config";
import connection from "./index";

export default () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${USER_INFO}`, function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      resolve(results)
    });
  });
};
