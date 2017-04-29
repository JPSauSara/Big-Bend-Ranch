var mysql = require("mysql");
var inquirer = require("inquirer");

var config = require('./config.js');
var connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) throw err;
  // replace the console.log with a function
  // console.log("connected as id " + connection.threadId); //working: 'connected as id 5'
  showAll()
});

function showAll () {
connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  console.log(res);
  forSale();
});
};

function forSale() {
	inquirer.prompt([{
		// The first should ask them the ID of the product they would like to buy.
		name: "item_id",
		type: "input",
		message: "Please enter the ID of the product you would like to buy: ",

	}, {
		name: "stock_quantity",
		type: "input",
		message: "How many would you like to buy?",
	}]).then(function(answer){
		console.log(answer);
		var query = "SELECT * FROM products WHERE ?";
		connection.query(query, { item_id: answer.item_id}, function(err, res) {
			for (var i = 0; i < res.length; i++) {
				console.log("Product: " + res[i].product_name);
				res[i].stock_quantity--;
				var total = res[i].price*answer.stock_quantity;
			// Your application should check if your store has enough of the product to meet the customer's request.
				
				if (res[i].stock_quantity >= answer.stock_quantity) {
				// fulfill the customer's order
					console.log("You bought " + answer.stock_quantity + " " + res[i].product_name);
					console.log("Your total is $" + total )
				} else {
				// Prevent the order from going through.
					console.log("Insufficient Quantity. Please try agian.");
					showAll();
				};
			};
			// showAll();

		});
	});

	// console.log("FN forSale works!");
};