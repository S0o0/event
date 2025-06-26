const accueilLink = document.getElementById('accueil-link');
// const input = document.getElementById('input-url');

// Initialisation au chargement
const initialUrl = localStorage.getItem('accueilUrl');
if (initialUrl) {
    accueilLink.href = initialUrl;
    // input.value = initialUrl;
    // accueilLink.textContent = 'ACCUEIL → ' + initialUrl;
}

// Ecoute les changements dans localStorage (faits dans une autre page)
window.addEventListener('storage', (event) => {
    if (event.key === 'accueilUrl') {
        const newUrl = event.newValue;
        accueilLink.href = newUrl || '#';
        // input.value = newUrl;
        // accueilLink.textContent = newUrl ? 'ACCUEIL → ' + newUrl : 'ACCUEIL';
    }
});