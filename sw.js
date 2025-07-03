self.addEventListener('install', event => {
    console.log('[SW] Service Worker installé');
});

self.addEventListener('activate', event => {
    console.log('[SW] Activé');
});

self.addEventListener('fetch', event => {
    // Tu peux ajouter un système de cache ici
});
