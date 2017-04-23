CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
	-- * item_id (unique id for each product)
	item_id INT	NOT NULL AUTO_INCREMENT,

	-- * product_name (Name of product)
	product_name	VARCHAR(100)	NULL,

	-- * department_name
	department_name VARCHAR(100)	NULL,

	-- * price (cost to customer)
	price DECIMAL(10,2) NULL,

	-- * stock_quantity (how much of the product is available in stores)
	stock_quantity INT NULL,
	PRIMARY KEY (item_id)
);	

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES	("Bluebonnet", "Horticulture", 7.10, 500),
		("Prickly Pear Cactus", "Horticulture", 35.96, 255),
		("Mexican Feathergrass", "Horticulture", 15.95, 300),
		("10-Gallon Hat", "Accessories", 800.00, 50),
		("Lasso", "Accessories", 39.99, 70),
		("Spurs", "Accessories", 29.99, 45),
		("Horse", "Transportation", 10000.00, 7),
		("Boots", "Shoes", 450.00, 80),
		("Pecan Pie", "Food", 19.95, 200),
		("BBQ Sauce", "Food", 25.00, 400);


SELECT *
FROM products;



