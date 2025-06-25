document.querySelectorAll('.item a').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        // Empêche les doubles clics
        if (link.classList.contains('clicked')) return;

        // Ajouter une classe "clicked" pour le style
        link.classList.add('clicked');

        // Supprimer les ticks existants
        const existingTick = link.parentElement.querySelector('.tick');
        if (existingTick) existingTick.remove();

        // Créer et positionner le tick
        const tick = document.createElement('div');
        tick.classList.add('tick');

        if ((index % 2) === 0) {
            tick.classList.add('tick-left');
        } else {
            tick.classList.add('tick-right');
        }

        link.parentElement.appendChild(tick);
    });
});
