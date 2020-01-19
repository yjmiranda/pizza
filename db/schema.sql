DROP DATABASE IF EXISTS pizzas_db;

CREATE DATABASE pizzas_db;

USE pizzas_db;

CREATE TABLE pizzas (
    id INT AUTO_INCREMENT,
    pizza_name VARCHAR(50),
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);