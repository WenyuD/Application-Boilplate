CREATE DATABASE IF NOT EXISTS boilplate;

CREATE TABLE IF NOT EXISTS user_info (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL DEFAULT '',
  user_password VARCHAR(255) NOT NULL DEFAULT '',
  PRIMARY KEY (id),
) 