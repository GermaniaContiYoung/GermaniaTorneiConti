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

// FUNZIONE GLOBALE PER AVVIARE I VIDEO (Ottimizzata per file e estensioni interamente minuscole)
function avviaVideo(nomeCompletoFile, titoloSchermata, provenienza) {
    const player = document.getElementById('main-video-player');
    const source = document.getElementById('video-source');
    
    // Rimuoviamo i vecchi handler degli errori poiché non sono più necessari
    player.onerror = null;

    // Punta direttamente al file convertito in minuscolo con estensione .mp4 minuscola
    source.src = nomeCompletoFile.toLowerCase() + ".mp4";
    
    // Carica ed esegue il video
    player.load();
    player.play().catch(err => console.log("Riproduzione in attesa dell'interazione utente."));
    
    // Aggiornamento grafico dei testi della pagina
    document.getElementById('main-title').innerText = titoloSchermata;
    
    // Nasconde in sicurezza i blocchi dei marcatori se presenti nella pagina
    if (document.getElementById('step-markers-marocco')) document.getElementById('step-markers-marocco').style.display = 'none';
    if (document.getElementById('step-markers-costa')) document.getElementById('step-markers-costa').style.display = 'none';
    if (document.getElementById('step-markers-argentina')) document.getElementById('step-markers-argentina').style.display = 'none';
    
    // Configura la corretta destinazione del pulsante Indietro
    if (provenienza === 'marocco' || provenienza === 'costa' || provenienza === 'argentina') {
        document.getElementById('video-back-btn').setAttribute('onclick', 'tornaAiMarcatori()');
    } else {
        if (document.getElementById('step-sub-selection')) document.getElementById('step-sub-selection').style.display = 'none';
        document.getElementById('video-back-btn').setAttribute('onclick', 'tornaAlSottomenu()');
    }
    
    document.getElementById('step-video').style.display = 'block';
}
