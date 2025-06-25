<?php
session_start();

require_once('./db/connection.php');

try {
    $pdo = new PDO(
        "mysql:host={$dbConn['host']};dbname={$dbConn['name']};charset=utf8mb4",
        $dbConn['user'],
        $dbConn['pass']
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}

// Redirection si non connecté
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <link rel="stylesheet" href="./css/style_index.css">

</head>

<body>

    <header id="toplink">
        <a href="appli.html">Connectez-vous aux différentes applications</a>
    </header>

    <div class="container">
        <a href="index_wedding.html" id="wedding">
            <div class="icon">
                <img src="./img/wedding.png" alt="Mariage" class="btn">
                <h3>Mariage</h3>
            </div>
        </a>

        <a href="index_birthday.html" id="birthday">
            <div class="icon">
                <img src="./img/birthday2.png" alt="Anniversaire" class="btn">
                <h3>Anniversaire</h3>
            </div>
        </a>


        <a href="index_bapteme.html" id="bapteme">
            <div class="icon">
                <img src="./img/bapteme.png" alt="Baptême" class="btn">
                <h3>Baptême</h3>
            </div>
        </a>

        <a href="index_company.html" id="company">
            <div class="icon">
                <img src="./img/company.png" alt="Evènements d'entreprise" class="btn">
                <h3>Évènement d'entreprise</h3>
            </div>
        </a>

    </div>
</body>

</html>