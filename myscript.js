//GIOCO DEI DADI
const dadi = document.getElementById("dadi");
dadi.addEventListener("click",function() {
    //genero un numero random per il computer
let numeroComputer = Math.floor(Math.random()* 6) +1;
console.log(numeroComputer);

    //genero un numero random per l'utente
let numeroUtente = Math.floor(Math.random()* 6) +1;
console.log(numeroUtente);

    //confronto i due numeri --> alert che dice chi ha vinto 
if (numeroComputer > numeroUtente) {
    alert("Il computer ha fatto " + numeroComputer + " e tu hai fatto " + numeroUtente + "." + "\nMi dispiace, hai perso!");
  } else if (numeroComputer < numeroUtente){
    alert("Il computer ha fatto " + numeroComputer + " e tu hai fatto " + numeroUtente + "." + "\nComplimenti, hai vinto!");
 } else {
    alert("Il computer ha fatto " + numeroComputer + " e tu hai fatto " + numeroUtente + "." + "\nPareggio...");
 }
})


//MAIL 
    //creo l'array con tutte le mail
const database = [
    "UC3xtw6T0NNOAsp@gmail.com",
    "pWvzIP2ig94mbJ@gmail.com",
    "nb3GZCyS6GyRnBc@gmail.com",
    "bBI36RHtC83OyBA@gmail.com",
    "lKwmu2usrYtwZr@gmail.com",
    "example@gmail.com"
];

const mailUtente = document.getElementById('mail');
console.log(mailUtente);

const cerca = document.getElementById("cerca");
console.log(cerca);

let controlloEmail = false;

//creo un ciclo for per controllare se la mail inserita dall'utente è presente nell'array 
cerca.addEventListener("click", function () {
    for (let i = 0; i < database.length; i++) {
        const element = database[i];
        if (element == mailUtente.value) {
            controlloEmail = true;
        }
    }
    if (controlloEmail == true) {
        alert ("Accesso consentito");
        controlloEmail = false;
    } else {
        alert ("Accesso negato");
    }
})


    
