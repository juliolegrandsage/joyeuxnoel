// Crée un élément audio
const christmasMusic = new Audio('feliznavidad.mp3'); // Remplace par le chemin de ta musique

// Fonction pour jouer la musique
function playMusic() {
    christmasMusic.play()
        .then(() => {
            console.log("Musique lancée avec succès !");
        })
        .catch(err => {
            console.log("Autoplay bloqué : " + err.message);
            alert("Cliquez pour jouer la musique !");
        });
}

// Joue la musique après interaction si nécessaire
window.addEventListener('load', () => {
    playMusic(); // Tente de jouer automatiquement

    // Ajout d'un bouton de secours
    document.body.addEventListener('click', () => {
        if (christmasMusic.paused) {
            playMusic();
        }
    });
});
