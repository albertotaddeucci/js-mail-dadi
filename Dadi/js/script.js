/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */

// const inputUser = document.querySelector("#input-number-user").value;

const buttonPlay = document.querySelector("#button-play");

buttonPlay.addEventListener("click",
function(){
    const images = ["https://www.tessiland.com/30555/dado-numero-bianco-1.jpg","https://www.tessiland.com/30557/dado-numero-bianco-2.jpg","https://www.tessiland.com/30559/dado-numero-bianco-3.jpg","https://www.tessiland.com/30561/dado-numero-bianco-4.jpg","https://www.tessiland.com/30563-home_default/dado-numero-bianco-5.jpg","https://www.tessiland.com/30565/dado-numero-bianco-6.jpg"]
    const randomNumUser = Math.floor((Math.random() * 6) + 1);
    const randomNumPc = Math.floor((Math.random() * 6) + 1);

    if(randomNumPc > randomNumUser){
        document.getElementById("result").innerText = "Hai perso :(";
        document.getElementById("result").className += " text-danger";
        document.getElementById("button-play").className += " d-none";
        document.getElementById("paragraph").className += " d-none";     
        
        
    } else if (randomNumPc < randomNumUser){
        document.getElementById("result").innerText = "Hai vinto!";
        document.getElementById("result").className += " text-success";
        document.getElementById("button-play").className += " d-none";
        document.getElementById("paragraph").className += " d-none";
        
    }else{
        document.getElementById("result").innerText = "È un pareggio";
        document.getElementById("button-play").className += " d-none";
        document.getElementById("paragraph").className += " d-none";
       
    }
        
    document.querySelector("#resultpc").innerHTML = `Risultato PC: <b>${randomNumPc}</b>`
    document.querySelector("#resultuser").innerHTML = `Il tuo risultato : <b>${randomNumUser}</b>`
    
    document.querySelector("#cambio").src = `${images[randomNumPc-1]}`
    document.querySelector("#cambio2").src = `${images[randomNumUser-1]}`

    

}
)

