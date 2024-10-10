console.log('File JS collegato correttamente')
// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const giveMeRandom = function(n) {
    const randomArray = []
    for(let i=0; i<n; i++) {
        randomArray.push(Math.floor(Math.random()*11))
        console.log('Numero ', i+1, ': ' + randomArray[i])
    }
    return randomArray
}

const result = giveMeRandom(8)
console.log(result)
const checkArray = function(arr) {
    let acc = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>5){
            console.log('Item ' + i + ' è maggiore di 5')
            acc+= arr[i]
        } else {
            console.log('Item ' + i + ' non è maggiore di 5')
        }
    }
    return acc
}

console.log("La somma degli elementi dell' array maggiori di 5 è: ", checkArray(result))

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
    {
        price: 60,
        name: 'webcam',
        id: 12345,
        quantity: 1,
    },

    {
        price: 40,
        name: 'monitor',
        id: 12343,
        quantity: 1,
    },

    {
        price: 500,
        name: 'laptop',
        id: 12453,
        quantity: 1,
    },

    {
        price: 160,
        name: 'smartphone',
        id: 12333,
        quantity: 1,
    },

    {
        price: 40,
        name: 'game',
        id: 13345,
        quantity: 3,
    },
] 

const shoppingCartTotal = function(arr) {
    let acc=0
    for (let i=0; i<arr.length; i++){
        acc += arr[i].price*arr[i].quantity
    }
    return acc
}

console.log('Il totale da pagare è: ' + shoppingCartTotal(shoppingCart))

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const newItem = {
    price: 40,
        name: 'book',
        id: 43345,
        quantity: 1,
}
const addToShoppingCart = function(arr,obj){
    let acc=0
    arr.push(obj)
    for(let i=0; i<arr.length;i++){
        acc += arr[i].quantity
    }
    return acc
}

console.log('Il carrello contiene ' + addToShoppingCart(shoppingCart,newItem))
console.log('Articoli nel carrello: ', shoppingCart)

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = function (arr) {
    let temp = arr[0]
    for (let i=1; i<arr.length; i++){
        if(arr[i].price>arr[i-1].price) {
            temp = arr[i]
        }
    }
    return temp
}

let mostExpensiveItem = maxShoppingCart(shoppingCart)
console.log('Articolo più costoso: ', mostExpensiveItem.name, ' - Prezzo: ' + mostExpensiveItem.price + ' €')

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = function(arr) {
    let temp
    for (let i=0; i<arr.length; i++) {
        temp = arr[i]
    }
    return temp
}

let lastestItem = latestShoppingCart(shoppingCart)
console.log('ultimo articolo: ', lastestItem)

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = Math.floor(Math.random()*10)
console.log('Numero casuale generato da inserire nella funzione loopUntil: ', number)

const loopUntil = function(n) {
    let count = 0
    let num
    do {
        console.log(num = Math.floor(Math.random()*10))
        if (num>=n){
            count++
        }
    } while (count < 3)
}

loopUntil(number)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
