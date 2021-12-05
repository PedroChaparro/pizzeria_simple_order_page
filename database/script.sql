CREATE TABLE orders(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    customer_name VARCHAR(64) NOT NULL, 
    customer_address VARCHAR(128) NOT NULL, 
    customer_phone VARCHAR(10) NOT NULL, 
    product VARCHAR(64) NOT NULL, 
    customer_comments VARCHAR(128)
); 

SHOW TABLES; 

DESCRIBE orders; 