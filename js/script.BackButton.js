document.getElementById("btn-admin").addEventListener("click", function () {
    const motDePasse = prompt("Entrez le mot de passe admin pour quitter :");
    if (motDePasse === "1234") {
        window.location.href = "index.html";
    } else {
        alert("Mot de passe incorrect. Vous restez sur la page.");
    }
});