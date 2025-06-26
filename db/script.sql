DROP DATABASE IF EXISTS event;
CREATE DATABASE event CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE event;

CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO utilisateurs (username, password) VALUES
(
    'admin1',
    '$2y$10$PUyY.S7CjKSkexbIfGp6R.Id0.jbf6RdeZn8jkTpvRuyjUZDUjjja'
),
(
    'admin',
    '$2y$10$haxI707Mzue/RiwTHXm7QeX2Ipef6uPQdRCaCq2okQdgzh1.2Elxi'
),
(   
    'adminn',
    '$2y$10$gWdfz53nVNh61cOUUm.jJeMcmsffLhuEyiAOtDBAETrXA7n5VYpwC'
)
;