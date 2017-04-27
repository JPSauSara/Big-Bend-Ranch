var mysql = require("mysql");
var inquirer = require("inquirer");

var config = require('./config.js');
var connection = mysql.createConnection(config);

connection.connect(function(err) {
  if (err) throw err;
  // replace the console.log with a function
  console.log("connected as id " + connection.threadId);
  forSale();
});

function forSale() {
	console.log("FN forSale works!");
};

// Figure out what parts you need from this code below
// connection.query("SELECT * FROM products", function(err, res) {
//   if (err) throw err;
//   console.log(res);
// });