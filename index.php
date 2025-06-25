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

$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($username === '' || $password === '') {
        $message = 'Veuillez remplir tous les champs.';
    } else {
        $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE username = :username");
        $stmt->execute(['username' => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            // Authentification réussie
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['rights'] = [
                'wedding' => (bool) $user['wedding'],
                'birthday' => (bool) $user['birthday'],
                'bapteme' => (bool) $user['bapteme'],
                'company' => (bool) $user['company'],
            ];
            header('Location: index_hub.php');
            exit();
        } else {
            $message = "Nom d'utilisateur ou mot de passe incorrect.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <title>Connexion</title>
    <link rel="stylesheet" href="./css/style_login.css">
</head>

<body>
    <div class="container">
        <h2>Connexion</h2>
        <?php if ($message): ?>
            <p class="error"><?= htmlspecialchars($message) ?></p>
        <?php endif; ?>
        <form method="post" action="">
            <label for="username">Nom d'utilisateur</label>
            <input type="text" name="username" id="username" required autofocus />

            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password" required />

            <input type="submit" value="Se connecter" />
        </form>
    </div>
</body>

</html>