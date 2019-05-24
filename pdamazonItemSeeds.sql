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

