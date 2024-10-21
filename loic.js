function factorielle(n) {
    if (n < 0) {
        return "Le nombre doit être positif";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorielle(n - 1);
}

document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = parseInt(document.getElementById('numberInput').value);
    const resultDiv = document.getElementById('result');
    if (isNaN(number) || number < 0) {
        resultDiv.textContent = "Veuillez entrer un nombre valide.";
    } else {
        const result = factorielle(number);
        resultDiv.textContent = `La factorielle de ${number} est ${result}.`;
    }
});