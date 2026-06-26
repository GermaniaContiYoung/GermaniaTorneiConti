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

// FUNZIONE GLOBALE PER AVVIARE I VIDEO (Gestione dinamica maiuscole/minuscole ed estensioni)
function avviaVideo(nomeCompletoFile, titoloSchermata, provenienza) {
    const player = document.getElementById('main-video-player');
    const source = document.getElementById('video-source');
    
    // Resetta eventuali vecchi controlli di errore per evitare loop continui
    player.onerror = null;

    // TENTATIVO 1: Prova a caricare il formato standard tutto minuscolo (.mp4)
    source.src = nomeCompletoFile.toLowerCase() + ".mp4";
    
    // SE DA ERRORE 404 (Perché il file su GitHub ha lettere o estensioni maiuscole), scatta la correzione:
    player.onerror = function() {
        // Se abbiamo già provato il formato tutto maiuscolo (.MP4) e fallisce, ci fermiamo per evitare loop
        if (source.src.includes(nomeCompletoFile.toUpperCase() + ".MP4")) {
            console.error("Il file video non esiste sul server in nessun formato.");
            return;
        }

        // TENTATIVO 2: Mantieni il nome minuscolo ma prova l'estensione .MP4 maiuscola (Utile per i file 'cot')
        if (!source.src.endsWith(".MP4")) {
            console.log("File .mp4 non trovato, provo l'estensione .MP4 maiuscola...");
            source.src = nomeCompletoFile.toLowerCase() + ".MP4";
            player.load();
            player.play();
        } 
        // TENTATIVO 3: Prova a trasformare l'intero file in MAIUSCOLO (Utile per i file dell'Argentina scritti in grande)
        else {
            console.log("Estensione fallita, provo a forzare l'intero nome in MAIUSCOLO...");
            source.src = nomeCompletoFile.toUpperCase() + ".MP4";
            player.load();
            player.play();
        }
    };
    
    // Caricamento del primo tentativo
    player.load();
    player.play();
    
    // Aggiornamento grafico dei testi della pagina
    document.getElementById('main-title').innerText = titoloSchermata;
    
    // Nasconde in sicurezza i blocchi dei marcatori se presenti nella pagina
    if (document.getElementById('step-markers-marocco')) document.getElementById('step-markers-marocco').style.display = 'none';
    if (document.getElementById('step-markers-costa')) document.getElementById('step-markers-costa').style.display = 'none';
    if (document.getElementById('step-markers-argentina')) document.getElementById('step-markers-argentina').style.display = 'none';
    
    if (provenienza === 'marocco' || provenienza === 'costa' || provenienza === 'argentina') {
        document.getElementById('video-back-btn').setAttribute('onclick', 'tornaAiMarcatori()');
    } else {
        if (document.getElementById('step-sub-selection')) document.getElementById('step-sub-selection').style.display = 'none';
        document.getElementById('video-back-btn').setAttribute('onclick', 'tornaAlSottomenu()');
    }
    
    document.getElementById('step-video').style.display = 'block';
}