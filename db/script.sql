CREATE DATABASE IF NOT EXISTS event CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE event;

CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
INSERT INTO utilisateurs (username, password) VALUES (
    'utilisateur1',
    '$2y$10$yYJ0BkCIIRnQiIhgC4PquOXKi6fW2JwhUq5NAD2ftxxIV.3F5CTUy'
);
/* Le hash correspond au mot de passe 'motdepasse123' généré par password_hash('motdepasse123', PASSWORD_DEFAULT) en PHP */