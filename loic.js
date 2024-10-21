function nombrePair(nombre) {
    if ( nombre % 2 === 0 ) {
        return "LE NOMBRE EST PAIR"
    } else {
        "LE NOMBRE EST IMPAIR LOOSER"
    };
}

console.log(nombrePair(4));


// Fonction pour inverser une chaîne de caractères
function inverserChaine() {
    // Récupérer la valeur de l'input
    const inputString = document.getElementById("inputString").value;

    // Inverser la chaîne en utilisant split, reverse et join
    const reversedString = inputString.split('').reverse().join('');

    // Afficher la chaîne inversée
    document.getElementById("result").textContent = "Chaîne inversée: " + reversedString;
}
