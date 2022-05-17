import connection from "./index";

export default () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM user_info', function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      resolve(results)
    });
  });
};
