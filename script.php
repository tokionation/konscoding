<?php
// Se connecter à la base de données
$servername = "localhost"; // Remplacez par l'adresse de votre serveur de base de données
$username = "votre_nom_d_utilisateur"; // Remplacez par le nom d'utilisateur de votre base de données
$password = "votre_mot_de_passe"; // Remplacez par le mot de passe de votre base de données
$dbname = "votre_nom_de_base_de_données"; // Remplacez par le nom de votre base de données

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion à la base de données
if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}

// Récupérer les informations soumises par le formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Effectuer la requête pour vérifier les informations d'identification
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    // Vérifier si l'utilisateur existe dans la base de données
    if ($result->num_rows > 0) {
        // Utilisateur trouvé, connexion réussie
        echo "Connexion réussie !";
    } else {
        // Utilisateur non trouvé, connexion échouée
        echo "Nom d'utilisateur ou mot de passe incorrect.";
    }
}

// Fermer la connexion à la base de données
$conn->close();
?>
