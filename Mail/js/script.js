/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere 
(qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.
*/


const buttonCtrl = document.querySelector("#button-ctrl");

buttonCtrl.addEventListener("click",
function(){

    const inputEmail = document.querySelector("#input-email").value;
    const emails = ["user1@gmail.com","user2@gmail.com","user3@gmail.com","userY@yahoo.it", "userH@hotmail.it", "user4@gmail.com"];
    
    let elementFound = false

    for(let i=0; i<emails.length; i++){

        if (emails[i] === inputEmail ){
            elementFound = true;
            document.querySelector("#result").innerText = "Email trovata";
            document.querySelector("#result").innerText += `. Si trova nella posizione ${[i+1]} della lista`;
            document.querySelector("#result").className += " text-success"

        } 

    }

    if (elementFound === false){
        document.querySelector("#result").innerText = "Email non trovata"
        document.querySelector("#result").className += " text-danger"
    } 
    
    for(let i=0; i<emails.length; i++){

        

    }
    
}
)
