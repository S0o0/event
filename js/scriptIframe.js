document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('fullscreen-iframe');
    const closeBtn = document.getElementById('close-iframe-btn');
    const links = document.querySelectorAll('.iframe-link');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            iframe.style.display = 'block';
            closeBtn.style.display = 'block';
            iframe.src = link.href;
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        iframe.style.display = 'none';
        closeBtn.style.display = 'none';
        iframe.src = '';
        document.body.style.overflow = '';
    });
});
