// L’utente potrà compilare il form e cliccare il pulsante per calcolare il prezzo:

// recuperare i km dall’input dei km
const kmInputElement = document.getElementById('km') 
console.log(kmInputElement)


// recuperare l’eta dall’input dell’età
const ageInputElement = document.getElementById('age') //object
console.log(ageInputElement)

// definire l'elemento bottone
const buttonElement = document.getElementById('submit') //object
console.log(buttonElement)

// abilitare ascolto clic sul bottone
buttonElement.addEventListener('click', function () {
	console.log('click on button')


// chiedere il numero dei km da percorrere
const km = parseFloat(kmInputElement.value); //number
//console.log(km)

// chiedere l'età
const age = parseFloat(ageInputElement.value) //number
//console.log(age)

// impostare variabile prezzo al km
const pricePerKm = 0.21; //number

// calcolare il prezzo del biglietto senza sconti
const basePrice = (km * pricePerKm); //number
//console.log(basePrice)

// impostare le variabili di sconto
let discount = 0 //number

if (age < 18) {
    discount = 0.2 //number
} else if (age > 65) {
    discount = 0.4 //number
}

// calcolare il prezzo del biglietto applicando gli sconti
const price = basePrice - basePrice * discount //number

// stampare il prezzo finale riducendo il numero di cifre decimali a 2
console.log (price.toFixed(2))

// stampare il prezzo del biglietto sulla viewport tramite collegamento a html
const priceElement = document.getElementById('price')
priceElement.innerHTML = + price.toFixed(2) + '&euro;'
})