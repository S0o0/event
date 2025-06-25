<?php
$password = 'admin';
$hash = '$2y$10$u2LR8MmjHDN/YPeuW89xYOaAjrY6v7vCVtPMQvP77X.UtjzXzNOwK';

if (password_verify($password, $hash)) {
    echo "Password is valid!";
} else {
    echo "Password is invalid!";
}
?>


<html>

<body>
    <form method="POST">
        <input type="text" name="username" placeholder="Nom d'utilisateur" required>
        <input type="password" name="password" placeholder="Mot de passe" required>
        <button type="submit">Se connecter</button>
    </form>
</body>

</html>