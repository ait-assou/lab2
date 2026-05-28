const paragraphes = document.querySelectorAll("p")
const btnJSStyle = document.getElementById("jsStyle")

function changerBackground() {
    paragraphes.forEach(paragraphe => {
        // Vu que j'ai un autrte paragrapge dans le footer et qui n'est pas ciblé, j'ai ajouté un data-attribute pour cibler uniquement les paragraphes du main
        if(paragraphe.dataset.pcible === "paragraphe cible") {
            paragraphe.style.backgroundColor = "yellow" // changer la couleur de fond en jaune
        }
        
    })
    
}