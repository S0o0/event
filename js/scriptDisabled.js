// Fonction appelée au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.item a');

    links.forEach((link, index) => {
        const module = link.dataset.module;
        const isEnabled = localStorage.getItem(`module_${module}`) !== 'disabled';

        // Applique l'état (enabled/disabled)
        if (!isEnabled) {
            link.classList.add('disabled');
            link.addEventListener('click', preventClick);
        }

        // Met à jour l'état du switch et du texte
        const checkbox = document.querySelector(`input[data-module="${module}"]`);
        const label = document.getElementById(`status-${module}`);
        if (checkbox && label) {
            checkbox.checked = isEnabled;
            label.textContent = isEnabled ? "✅ Activé" : "❌ Désactivé";
        }

        // Gestion du tick visuel au clic
        link.addEventListener('click', (e) => {
            if (link.classList.contains('disabled')) return;

            if (link.classList.contains('clicked')) return;
            link.classList.add('clicked');

            // Supprimer les ticks précédents
            const existingTick = link.parentElement.querySelector('.tick');
            if (existingTick) existingTick.remove();

            // Créer un tick et l'ajouter
            const tick = document.createElement('div');
            tick.classList.add('tick');
            tick.classList.add((index % 2) === 0 ? 'tick-left' : 'tick-right');

            link.parentElement.appendChild(tick);
        });
    });
});

// Fonction de toggle activé/désactivé
function toggleModule(input) {
    const module = input.dataset.module;
    const isEnabled = input.checked;
    const label = document.getElementById(`status-${module}`);
    const link = document.querySelector(`a[data-module="${module}"]`);

    // Sauvegarde dans localStorage
    localStorage.setItem(`module_${module}`, isEnabled ? 'enabled' : 'disabled');

    // Met à jour le texte
    if (label) {
        label.textContent = isEnabled ? "✅ Activé" : "❌ Désactivé";
    }

    // Active/désactive le lien
    if (link) {
        if (!isEnabled) {
            link.classList.add('disabled');
            link.addEventListener('click', preventClick);
        } else {
            link.classList.remove('disabled');
            link.removeEventListener('click', preventClick);
        }
    }
}

// Fonction pour bloquer les clics
function preventClick(e) {
    e.preventDefault();
}