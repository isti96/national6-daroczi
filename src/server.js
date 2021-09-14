const mysql = require("mysql"),
    express = require("express"),
    bodyParser = require('body-parser');

const connection = mysql.createPool({
    host     : '192.168.100.27', // Your connection adress (localhost).
    user     : 'root',     // Your database's username.
    password : '',        // Your database's password.
    database : 'my_db',   // Your database's name.
    queueLimit : 0,
    connectionLimit : 0 ,
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    port: 3000
  });
  
  // Starting our app.
  var app = express();
  
  // Creating a GET route that returns data from the 'users' table.
  app.get('/userslogin', function (req, res) {
      // Connecting to the database.
      connection.getConnection(function (err, conn) {
          if (err) {
              res.send("error in connecting mysql" + err);
          } else {
              var query = "SELECT * from users WHERE email like?";
              query = mysql.format(query,table);
              console.log("query", query);
              conn.query(query, function(err, result){
                  if (!err) {
                      res.send(result);
                  }
              })
          }
  
    //   // Executing the MySQL query (select all data from the 'users' table).
    //   conn.query('SELECT * FROM users', [id, name], function (error, results, fields) {
    //     // If some error occurs, we throw an error.
    //     if (error) throw error;
  
    //     // Getting the 'response' from the database and sending it to our route. This is were the data is.
    //     res.send(results)
    
    });
    });
  
  
  // Starting our server.
  app.listen(3000, () => {
   console.log('Go to http://192.168.100.27:3000/userslogin so you can see the data.');
  });