// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const lista = [];

// chiedo all'utente di inserire 6 numeri
for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt("Inserisci un numero."));
    console.log(numero);

    // verifico se il numero è dispari e nel caso lo aggiungo all'array
    if (numero % 2 === 1) {
        lista.push(numero);
    }
}

console.log(lista);

// stampo il risultato
const element = document.getElementById("risultato");
element.innerHTML = `I numeri dispari sono ${lista}.` 