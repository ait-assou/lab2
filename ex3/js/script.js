function phraseMajuscule(phrase) {
    let mots = phrase.split(" ");
    let motsMajuscules = mots.map(mot => {
        return mot.charAt(0).toUpperCase() + mot.slice(1);
    });
    return motsMajuscules.join(" ");
}

phrase = "il fait froid aujourd'hui"
console.log(phraseMajuscule(phrase));


function motPlusLong(str) {
    const mots = str.split(" ");
    let motPlusLong = "";
    for (let mot of mots) {
        if (mot.length > motPlusLong.length) {
            motPlusLong = mot;
        }
    }
    return motPlusLong;
}

mot = "Le mot le plus long est anticonstitutionnellement"
console.log(motPlusLong(mot));
