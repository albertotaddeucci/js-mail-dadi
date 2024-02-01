/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

// const inputUser = document.querySelector("#input-number-user").value;

const buttonPlay = document.querySelector("#button-play");


buttonPlay.addEventListener("click",
function(){
    const randomNumUser = Math.floor((Math.random() * 6) + 1);
    const randomNumPc = Math.floor((Math.random() * 6) + 1);

    if(randomNumPc > randomNumUser){
        document.getElementById("result").innerText = "Hai perso";
    } else if (randomNumPc < randomNumUser){
        document.getElementById("result").innerText = "Hai vinto";

    } else {
        document.getElementById("result").innerText = "è un pareggio";

    }

    document.querySelector("#resultpc").innerText = `risultato PC: ${randomNumPc}`
    document.querySelector("#resultuser").innerText = `Tuo risultato : ${randomNumUser}`


}
)

