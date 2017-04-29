var mysql = require("mysql");
var inquirer = require("inquirer");

var config = require('./config.js');
var connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) throw err;
  // replace the console.log with a function
  // console.log("connected as id " + connection.threadId); //working: 'connected as id 5'
});

connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  console.log(res);
  forSale();
});

function forSale() {
	inquirer.prompt([{
		// The first should ask them the ID of the product they would like to buy.
		name: "item_id",
		type: "input",
		message: "Please enter the ID of the product you would like to buy: ",

	}]).then(function(answer){
		console.log(answer);
		var query = "SELECT * FROM products WHERE ?";
		connection.query(query, { item_id: answer.item_id}, function(err, res) {
			for (var i = 0; i < res.length; i++) {
				console.log("Product: " + res[i].product_name);
			}
		});
	});
	// }, {
	// 	// The second message should ask how many units of the product they would like to buy.
	// 	name: "buyqty",
	// 	type: "input",
	// 	message: "How many would you like to buy?",
	// 	validate: function(value) {
	// 		if (isNAN(value) === false) {
	// 			return true;
	// 		}
	// 		return false;
	// 	}
	// }]).then(function(answer) {
	// 	var query = "SELECT * FROM products WHERE ?";
	// 	connection.query(query, [answer.productID, answer.buyqty], function(err, res){
	// 		for (var i = 0 < res.length; i++) {
	// 			console.log ("");
	// 		}
		// }); 
	// });

	console.log("FN forSale works!");
};