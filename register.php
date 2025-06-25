<?php
// Connexion à la base de données
require_once('./db/connection.php');


$host = $dbConn['host'];
$username_db = $dbConn['user'];
$password_db = $dbConn['pass'];
$dbname = $dbConn['name'];
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username_db, $password_db);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

// Vérification si le formulaire est soumis
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupération et sécurisation des données
    $username = htmlspecialchars(trim($_POST['username']));
    $password = trim($_POST['password']);

    // Hash du mot de passe
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    // Insertion en base de données
    try {
        $stmt = $pdo->prepare("INSERT INTO utilisateurs (username, password) VALUES ( ?, ?)");
        $stmt->execute([$username, $passwordHash]);
        echo "Inscription réussie !";
        header ('Location: index.php');
        exit();
    } catch (PDOException $e) {
        if ($e->errorInfo[1] == 1062) {
            echo "Erreur : Ce nom d'utilisateur ou cet email est déjà utilisé.";
        } else {
            echo "Erreur lors de l'inscription : " . $e->getMessage();
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page d'inscription</title>
    <link rel="stylesheet" href="./css/style_login.css" />
</head>

<body>
    <div class="container">
        <form action="" method="POST">
            <label for="username">Nom d'utilisateur :</label><br>
            <input type="text" id="username" name="username" required><br><br>

            <label for="password">Mot de passe :</label><br>
            <input type="password" id="password" name="password" required><br><br>

            <button class="btn" type="submit">S'inscrire</button>
        </form>
    </div>
</body>

</html>