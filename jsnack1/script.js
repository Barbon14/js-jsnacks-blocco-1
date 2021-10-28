// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// chiedi all'utente di inserire 2 numeri
const a = parseInt(prompt("Inserisci il primo numero."));
const b = parseInt(prompt("Inserisci il secondo numero."));

// confronto i due numeri e stampo il più alto 
const element = document.getElementById("risultato");

if (a > b) {
    element.innerHTML =`Il numero maggiore è ${a}`;
    console.log("il numero maggiore è", a);
} else {
    element.innerHTML = `Il numero maggiore è ${b}`;
    console.log("il numero maggiore è", b);
}