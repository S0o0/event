const accueilLink = document.getElementById('accueil-link');

// Initialisation au chargement
const initialUrl = localStorage.getItem('accueilUrl');
if (initialUrl) {
    accueilLink.href = initialUrl;
    // accueilLink.textContent = 'ACCUEIL → ' + initialUrl;
}

// Ecoute les changements dans localStorage (faits dans une autre page)
window.addEventListener('storage', (event) => {
    if (event.key === 'accueilUrl') {
        const newUrl = event.newValue;
        accueilLink.href = newUrl || '#';
        // accueilLink.textContent = newUrl ? 'ACCUEIL → ' + newUrl : 'ACCUEIL';
    }
});