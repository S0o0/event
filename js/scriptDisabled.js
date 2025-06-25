// scriptDisabled.js

// Fonction pour appliquer la classe 'disabled' selon localStorage
function applyDisabledClasses() {
    const modules = ['livreor', 'programme', 'photo', 'plan', 'video', 'karaoke', 'facetime', 'feedback'];

    modules.forEach(moduleName => {
        const status = localStorage.getItem(`module_${moduleName}`);
        const elements = document.querySelectorAll(`[data-module="${moduleName}"]`);

        elements.forEach(el => {
            if (status === 'disabled') {
                el.classList.add('disabled');
            } else {
                el.classList.remove('disabled');
            }
        });
    });
}

// Appeler la fonction au chargement du DOM
window.addEventListener('DOMContentLoaded', applyDisabledClasses);

// Fonction appelée au changement d’un checkbox
function toggleModule(checkbox) {
    const moduleName = checkbox.getAttribute('data-module');
    if (checkbox.checked) {
        localStorage.setItem(`module_${moduleName}`, 'enabled');
    } else {
        localStorage.setItem(`module_${moduleName}`, 'disabled');
    }
    applyDisabledClasses();
}
