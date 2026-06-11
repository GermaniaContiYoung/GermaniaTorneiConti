document.addEventListener('DOMContentLoaded', function() {
    // FUNZIONE APERTURA TENDINA VIDEO
    const videoDropdown = document.getElementById('videoDropdown');
    if (videoDropdown) {
        const dropbtn = videoDropdown.querySelector('.dropbtn');
        
        dropbtn.addEventListener('click', function(e) {
            e.stopPropagation();
            videoDropdown.classList.toggle('open');
        });

        const links = videoDropdown.querySelectorAll('.dropdown-link');
        links.forEach(link => {
            link.addEventListener('click', function() {
                videoDropdown.classList.remove('open');
            });
        });
    }

    // CHIUSURA SE SI CLICCA FUORI DA OGNI ELEMENTO
    document.addEventListener('click', function() {
        if (videoDropdown) videoDropdown.classList.remove('open');
    });
});