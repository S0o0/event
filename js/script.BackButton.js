document.getElementById("admin-access").addEventListener("click", function (event) {
    event.preventDefault(); // Empêche la navigation par défaut

    const motDePasse = prompt("Entrez le mot de passe admin pour quitter :");
    if (motDePasse === "1234") {
        // Redirige vers index.html seulement si mdp correct
        window.location.href = "index.html";
    } else {
        alert("Mot de passe incorrect. Vous restez sur la page.");
    }
});
