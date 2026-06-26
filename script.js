// FUNZIONE GLOBALE PER AVVIARE I VIDEO (Ottimizzata per giova1arg.MP4, giova3arg.MP4 e murariu1arg.MP4)
function avviaVideo(nomeCompletoFile, titoloSchermata, provenienza) {
    const player = document.getElementById('main-video-player');
    const source = document.getElementById('video-source');
    
    // Resetta eventuali vecchi controlli di errore per evitare loop continui
    player.onerror = null;

    // Ordiniamo i tentativi mettendo per PRIMO il formato con estensione maiuscola (.MP4),
    // che è quello usato dall'Argentina (giova1arg.MP4) e dalla Costa d'Avorio (giovannetti1cot.MP4)
    const tentativi = [
        nomeCompletoFile.toLowerCase() + ".MP4", // 1. Nome minuscolo, estensione MAIUSCOLA (es. giova1arg.MP4)
        nomeCompletoFile.toLowerCase() + ".mp4", // 2. Tutto minuscolo (es. giova2arg.mp4)
    ];
    
    let indiceTentativo = 0;

    // Se il tentativo corrente fallisce, passa automaticamente al successivo
    player.onerror = function() {
        indiceTentativo++;
        if (indiceTentativo < tentativi.length) {
            console.log("Video non trovato, provo il formato alternativo: " + tentativi[indiceTentativo]);
            source.src = tentativi[indiceTentativo];
            player.load();
            player.play();
        } else {
            console.error("Il file video non esiste sul server in nessun formato possibile.");
        }
    };
    
    // Avvia subito il primo tentativo (nome minuscolo + .MP4)
    source.src = tentativi[indiceTentativo];
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
