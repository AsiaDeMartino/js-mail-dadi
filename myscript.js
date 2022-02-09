//GIOCO DEI DADI
const dadi = document.getElementById("dadi")
dadi.addEventListener("click",function() {
    //genero un numero random per il computer
let numeroComputer = Math.floor(Math.random()* 6) +1
console.log(numeroComputer)

    //genero un numero random per l'utente
let numeroUtente = Math.floor(Math.random()* 6) +1
console.log(numeroUtente)

    //confronto i due numeri --> alert che dice chi ha vinto 
if (numeroComputer > numeroUtente) {
    alert("Mi dispiace, hai perso!")
  } else if (numeroComputer < numeroUtente){
    alert("Complimenti, hai vinto!")
 } else {
    alert("Pareggio...")
 }
})



//MAIL
    //chiedo all'utente la sua mail 
    //creo l'array con tutte le mail 
    //creo un ciclo for per controllare se la mail inserita dall'utente è presente nell'array 