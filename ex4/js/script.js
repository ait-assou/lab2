const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');
const slider3 = document.getElementById('slider3');
const couleurAffichee = document.getElementById("couleur-affichee");


function genererCouleur() {
    console.log("Génération d'une nouvelle couleur aléatoire...");
    const valeur1 = Math.floor(Math.random() * 256);
    const valeur2 = Math.floor(Math.random() * 256);
    const valeur3 = Math.floor(Math.random() * 256);

    const r = valeur1;
    const g = valeur2;
    const b = valeur3;

    slider1.value = r;
    slider2.value = g;
    slider3.value = b;

    const couleurRGB = `rgb(${r}, ${g}, ${b})`;
    couleurAffichee.style.backgroundColor = couleurRGB;
}


genererCouleur(); // Générer une couleur initiale au chargement de la page

