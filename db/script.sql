DROP DATABASE IF EXISTS event;
CREATE DATABASE event CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE event;

CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    wedding BOOLEAN NOT NULL,
    birthday BOOLEAN NOT NULL,
    bapteme BOOLEAN NOT NULL,
    company BOOLEAN NOT NULL
);

INSERT INTO utilisateurs (username, password, wedding, birthday, bapteme, company) VALUES
(
    'admin1',
    '$2y$10$PUyY.S7CjKSkexbIfGp6R.Id0.jbf6RdeZn8jkTpvRuyjUZDUjjja', 
    -- mot de passe = admin
    TRUE,
    TRUE,
    TRUE,
    FALSE
),
(
    'admin',
    '$2y$10$haxI707Mzue/RiwTHXm7QeX2Ipef6uPQdRCaCq2okQdgzh1.2Elxi',
    -- mot de passe = admin
    FALSE,
    FALSE,
    TRUE,
    TRUE
),
(   
    'adminn',
    '$2y$10$gWdfz53nVNh61cOUUm.jJeMcmsffLhuEyiAOtDBAETrXA7n5VYpwC',
    -- mot de passe = adminn
    TRUE,
    TRUE,
    TRUE,
    TRUE
)
;
