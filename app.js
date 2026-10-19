const recherche = document.getElementById("recherche");
const cartes = document.querySelectorAll(".card");

function afficherCours() {
    const texte = recherche.value.toLowerCase();

    cartes.forEach(function(carte) {
        const matiere = carte.querySelector("h3").textContent.toLowerCase();

        carte.style.display = matiere.includes(texte) ? "block" : "none";
    });
}

recherche.addEventListener("input", afficherCours);

function filtrerCours(niveau) {
    cartes.forEach(function(carte) {
        const niveaux = carte.dataset.niveau;

        const afficher =
            niveau === "Tous" || niveaux.includes(niveau);

        carte.style.display = afficher ? "block" : "none";
    });

    recherche.value = "";
}