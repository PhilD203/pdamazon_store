const mysql = require("mysql");
const inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
  
    password: "7920stouT!",
    database: "pdamazon_db"
  });

  connection.connect(function(err){
      if (err) throw err;
      console.log("connected as id " + connection.threadId);
    //call function here
  });