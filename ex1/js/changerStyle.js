const paragraphe = document.getElementById("texte")
const btnJSStyle = document.getElementById("jsStyle")

function changerStyle() {    
    console.log(paragraphe.textContent);
    paragraphe.style.fontSize = "12px"
    paragraphe.style.fontFamily = "Comic Sans MS "
    paragraphe.style.color = "blue"
}

btnJSStyle.style.width = "10rem"
btnJSStyle.style.backgroundColor = "#67CA62"
btnJSStyle.style.border = "none"
btnJSStyle.style.padding = "0.5rem 1rem"
btnJSStyle.style.marginTop = "0.5rem"
btnJSStyle.style.cursor = "pointer"

btnJSStyle.onmouseenter = () => {
    btnJSStyle.style.opacity = 0.8
}

btnJSStyle.onmouseleave = () => {
    btnJSStyle.style.opacity = 1
}



