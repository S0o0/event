<?php
$dbConn = array(
    'user' => 'if0_39279743',
    'pass' => 'M6foUUeTG3gQT',
    'name' => 'if0_39279743_event',
    'host' => 'sql310.infinityfree.com'
);

// Connexion à la base de données
$conn = new mysqli($dbConn['host'], $dbConn['user'], $dbConn['pass'], $dbConn['name']);
//Vérification de la connexion
if ($conn->connect_error) {
    die('Erreur de connexion');
}
?>