// Fonction pour ouvrir un popup centré avec dimensions personnalisées
function openPopup(url, title, w, h) {
    // Calcul position centrée
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const left = ((width / 2) - (w / 2)) + dualScreenLeft;
    const top = ((height / 2) - (h / 2)) + dualScreenTop;

    const newWindow = window.open(
        url,
        title,
        `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`
    );

    // Focus sur la popup
    if (window.focus) newWindow.focus();

    return newWindow;
}

document.querySelectorAll('.popup-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const url = link.href;
        const title = link.dataset.module || 'Popup';
        // Largeur et hauteur adaptables
        const width = 1000;
        const height = 700;

        // Pour les liens vides ou '#', on peut gérer différemment (ex: afficher un message)
        if (url === '#' || !url) {
            alert('Aucune URL à ouvrir pour ce lien.');
            return;
        }

        openPopup(url, title, width, height);
    });
});