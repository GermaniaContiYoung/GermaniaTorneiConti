document.addEventListener('DOMContentLoaded', function() {
    // Database dei dati dei giocatori perfettamente configurato
    const databaseGiocatori = {
        raparelli: { name: "Matteo Raparelli", role: "Portiere #55", img: "rapa.JPG", stats: [{val: "50", label: "Minuti Giocati"}, {val: "4", label: "Gol Subiti"}, {val: "0", label: "MVP"}] },
        muraru: { name: "Cristian Muraru", role: "Difensore #77", img: "ciccio.JPG", stats: [{val: "43", label: "Minuti Giocati"}, {val: "0", label: "Goal Fatti"}, {val: "0", label: "MVP"}] },
        cofani: { name: "Davide Cofani", role: "Difensore #19", img: "jag.JPG", stats: [{val: "43", label: "Minuti Giocati"}, {val: "0", label: "Goal Fatti"}, {val: "0", label: "MVP"}] },
        mastromattei: { name: "Daniele Mastromattei", role: "Difensore #22", img: "mastro.JPG", stats: [{val: "43", label: "Minuti Giocati"}, {val: "0", label: "Goal Fatti"}, {val: "0", label: "MVP"}] },
        digiacomo: { name: "Valerio Di Giacomo", role: "Difensore #11", img: "diggia.JPG", stats: [{val: "43", label: "Minuti Giocati"}, {val: "0", label: "Goal Fatti"}, {val: "0", label: "MVP"}] },
        marone: { name: "Christian Marone", role: "Centrocampista #10", img: "wallu.JPG", stats: [{val: "43", label: "Minuti Giocati"}, {val: "0", label: "Goal Fatti"}, {val: "0", label: "MVP"}] },
        cava: { name: "Lorenzo Cava", role: "Centrocampista #7", img: "dude.JPG", stats: [{val: "43", label: "Minuti Giocati"}, {val: "1", label: "Goal Fatti"}, {val: "0", label: "MVP"}] },
        potente: { name: "Lorenzo Potente", role: "Centrocampista #4", img: "potix.JPG", stats: [{val: "43", label: "Minuti Giocati"}, {val: "0", label: "Goal Fatti"}, {val: "0", label: "MVP"}] },
        franci: { name: "Cristian Franci", role: "Centrocampista #4", img: "bryan.JPG", stats: [{val: "43", label: "Minuti Giocati"}, {val: "0", label: "Goal Fatti"}, {val: "0", label: "MVP"}] },
        giovannetti: { name: "Emanuele Giovannetti", role: "Attaccante #24", img: "giova.JPG", stats: [{val: "50", label: "Minuti Giocati"}, {val: "4", label: "Goal Fatti"}, {val: "1", label: "MVP"}] },
        ruotolo: { name: "Danilo Ruotolo", role: "Attaccante #21", img: "chinese.JPG", stats: [{val: "43", label: "Minuti Giocati"}, {val: "1", label: "Goal Fatti"}, {val: "0", label: "MVP"}] },
        loturco: { name: "Andrea Lo Turco", role: "Attaccante #23", img: "lo turco.JPG", stats: [{val: "43", label: "Minuti Giocati"}, {val: "3", label: "Goal Fatti"}, {val: "0", label: "MVP"}] }
    };

    // Estrae l'ID dall'URL della pagina (?id=nome)
    const urlParams = new URLSearchParams(window.location.search);
    const giocatoreId = urlParams.get('id');

    // Se valido, stampa i dettagli a schermo
    if (giocatoreId && databaseGiocatori[giocatoreId]) {
        const p = databaseGiocatori[giocatoreId];
        
        document.title = p.name + " - Statistiche";
        document.getElementById('player-name').innerText = p.name;
        document.getElementById('player-role').innerText = p.role;
        document.getElementById('player-img').src = p.img;
        document.getElementById('player-img').alt = p.name;

        let statsHTML = '';
        p.stats.forEach(s => {
            statsHTML += `
                <div class="stat-box">
                    <h4>${s.val}</h4>
                    <p>${s.label}</p>
                </div>
            `;
        });
        document.getElementById('stats-wrapper').innerHTML = statsHTML;
    } else {
        document.getElementById('player-name').innerText = "Giocatore non trovato";
    }
});