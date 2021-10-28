// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// creo un array vuoto
const lista=[];

// chiedo all'utente di inserire 10 numeri e li aggiungo all'array
for (let i = 0;i < 10; i++) {
    let numero=parseInt(prompt("Inserisci un numero."));
    lista.push(numero);
}

console.log(lista);

// sommo gli elementi dell'array tra loro
let somma = 0;

for (i =0; i < lista.length; i++) {
    somma = somma + lista[i];
}

// stampo il risultato
const element = document.getElementById("risultato");
element.innerHTML = `
La somma &egrave; ${somma}`;
console.log(somma);