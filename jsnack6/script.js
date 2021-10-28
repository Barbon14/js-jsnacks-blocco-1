// Genera un array di 50 numeri random.Nell’array non devono esserci doppioni.

const lista = [];
let numero = 0;

// genero numeri per riempire l'array fino a quando non ha 50 elementi
while (lista.length < 50) {
    numero = Math.floor(Math.random() * 50) + 1;
    console.log(numero);
    
    // controllo che il numero non siua già presente all'interno dell'array
    if (lista.includes(numero) === false) {
        lista.push(numero);
    }  
}

console.log(lista);

// stampo il risultato in pagina
const element = document.getElementById("risultato");
element.innerHTML = `I numeri sono ${lista}`;