//  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
const invitati = ['mattia', 'stefano', 'marco', 'luca', 'mirko'];

console.log(invitati);

// chiedo all'utente il suo nome
const nome = prompt("Inserisci il tuo nome.");
console.log(nome);

// confronto il nome dell'utente con gli elementi dell'array, uso un ciclo for
let accessoConsentito;

for (i = 0; i < invitati.length; i++) {

    // se trovo una corrispondenza ammetto l'utente, altrimenti gli nego l'accesso
    if (nome === invitati[i]) {
        accessoConsentito = true;
    }
}

// scrivo in pagina se l'utente può avere l'accesso oppure no
const element = document.getElementById("risultato");

if (accessoConsentito === true) {
    console.log("accesso consentito");
    element.innerHTML = "Puoi partecipare alla festa.";
} else {
    console.log("accesso negato");
    element.innerHTML = "Mi spiace. Non sei ammesso alla festa.";
}