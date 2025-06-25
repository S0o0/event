function toggleModule(checkbox) {
    const module = checkbox.dataset.module;
    if (checkbox.checked) {
        localStorage.setItem(`module_${module}`, 'enabled');
    } else {
        localStorage.setItem(`module_${module}`, 'disabled');
<<<<<<< HEAD
=======
    }
    updateModuleState(module);
}

function updateModuleState(module) {
    const link = document.querySelector(`a[data-module="${module}"]`);
    const checkbox = document.querySelector(`input[data-module="${module}"]`);
    const label = document.getElementById(`status-${module}`);

    if (!link || !checkbox || !label) return;

    if (checkbox.checked) {
        link.classList.remove('disabled');
        link.removeEventListener('click', preventClick);
        // label.textContent = "✅ Activé";
    } else {
        link.classList.add('disabled');
        link.addEventListener('click', preventClick);
        // label.textContent = "❌ Désactivé";
>>>>>>> main
    }
    updateModuleState(module);
}

function updateModuleState(module) {
    const link = document.querySelector(`a[data-module="${module}"]`);
    const checkbox = document.querySelector(`input[data-module="${module}"]`);
    const label = document.getElementById(`status-${module}`);

    if (!link || !checkbox || !label) return;

    if (checkbox.checked) {
        link.classList.remove('disabled');
        link.removeEventListener('click', preventClick);
        // label.textContent = "✅ Activé";
    } else {
        link.classList.add('disabled');
        link.addEventListener('click', preventClick);
        // label.textContent = "❌ Désactivé";
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

function preventClick(e) {
    e.preventDefault();
    alert("Ce module est désactivé.");
}

// Au chargement de la page, on initialise l'état des modules
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('input[type="checkbox"][data-module]').forEach(checkbox => {
        const module = checkbox.dataset.module;
        const isEnabled = localStorage.getItem(`module_${module}`) !== 'disabled';
        checkbox.checked = isEnabled;
        updateModuleState(module);
        checkbox.addEventListener('change', () => toggleModule(checkbox));
    });
});