// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// chiedo all'tente di inserire 2 parole
let a = prompt("Inserisci la prima parola.");
console.log(a);
let b = prompt("Inserisci la seconda parola.");
console.log(b);

// verifico quale sia la parola più lunga
let corta = "";
let lunga = "";
let uguali = false;

if (a.length === b.length) {
    uguali = true;
} else if (a.length > b.length) {
    corta = b;
    lunga = a;
} else {
    corta = a;
    lunga = b;
}

// stampo il risultato
const element = document.getElementById("risultato");

if (uguali === true) {
    element.innerHTML = `Le parole hanno la stessa lunghezza: ${a} ${b}`;
    console.log(corta, lunga);
} else {
    element.innerHTML = `
    La parola pi&ugrave; corta &egrave; ${corta}. <br>
    La parola pi&ugrave; lunga &egrave; ${lunga}.`;
    console.log(corta, lunga);
}
   