const input = document.getElementById('input-url');
const btn = document.getElementById('save-btn');

btn.addEventListener('click', () => {
    let url = input.value.trim();
    if (url) {
        // Si l'url ne commence pas par http:// ou https://, on le rajoute
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        localStorage.setItem('accueilUrl', url);
        alert('URL enregistrée');
        location.reload();
    } else {
        alert("Merci d'entrer une URL");
    }
});