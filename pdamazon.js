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
    prompt();
  });

  function prompt(){
    inquirer.prompt([
        
        {
        message: "Would you like to buy something?",
        name: "action",
        type: "list",
        choices: ["BUY ITEM"]
         }
    ])
    .then(answers => {
        console.log(answers.action);
        if(answers.action == "BUY ITEM"){
            buyItem();
        }
    })
  }

  function buyItem(){
    connection.query("SELECT * FROM products ", (error,res) =>{
        console.table(res);
        inquirer.prompt([{
            name: "action",
            message: "What is the index of the item you would like?",
            type:"number",
            },
        ])
        .then(answers => {
            inquirer.prompt([{
                name: "quantity",
                message: "How many would you like?",
                type:"number",
                },
            ])
                .then(result => {
                select(res[answers.action] , result.quantity);
            })
        }
    )}
)};

    function select(res , quantity){
    if (res.stock_quantity < quantity){
        console.log("We are all out. SORRY!")
    }
    else{
        console.log("Your total is" , res.price * quantity , "dollars.")
        let newQuantity = res.stock_quantity - quantity;
        connection.query("UPDATE products SET `stock_quantity` = "+ newQuantity +"  WHERE `item_id` = "+ res.item_id , (error,resin) =>{
            console.log("Thank You for Your Order!")
        })
    }
}
