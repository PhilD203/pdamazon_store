DROP DATABASE IF EXISTS pdamazon_db;

CREATE DATABASE pdamazon_db;

USE pdamazon_db;

CREATE TABLE products(
item_id  INT NOT NULL auto_increment ,
product_name VARCHAR (50),
department_name VARCHAR (50),
price INT NOT NULL ,
stock_quantity INTEGER NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products
    (product_name,department_name,price,stock_quantity)
VALUES
    ("Electric Goggles","Winter Sports",186,30),
	("Soloman Huckknife Snowboard","Winter Sports",495,75),
	("Capita Ultrafear","Winter Sports",395,75),
	("Public Display Snowboard","Winter Sports",475,75),
	("GNU Headspace Snowboard","Winter Sports",500,75),
	("HOWL Gloves","Winter Sports",55,100),
	("Volcom Jacket","Winter Sports",350,20),
	("North Face Jacket","Winter Sports",450,20),
	("Volcom Pants","Winter Sports",170,20),
	("Thirty Two Boots","Winter Sports",189,20);


