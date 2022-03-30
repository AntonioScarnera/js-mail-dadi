//email con controllo

const listaEmail = ["helloworld@gmail.com", "helloworld@icloud.com","helloworld@live.it", "helloworld@outlook.it"];
let coincide = false;

let userEmail = document.getElementById('email');

let submit = document.getElementById('submit');

let mailInfo = document.getElementById('mailInfo');
console.log(userEmail, submit ,mailInfo);

submit.addEventListener('click', function(){
    let email = userEmail.value;
    let controllore = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email=='')
    {
        alert("Devi indicare un indirizzo email"); 
        return false;
    }
    if (controllore.test(email))
    {
        for(let i = 0; i < listaEmail.length; i++){

            if(listaEmail.includes(email)){
                coincide = true;
            }else{
                coincide = false;
            }
        }
        if(coincide){
            alert("L'indirizzo email che hai inserito e' valido")
            mailInfo.innerHTML = `E-mail: ${email}`;
            mailInfo.classList.remove("d-none");
        }else{
            alert("L'indirizzo email che hai inserito e' formattata correttamente ma non è valida")
            mailInfo.innerHTML = `E-mail: ${email}`;
            mailInfo.classList.remove("d-none");
        }


    }
    else {
       alert("L'indirizzo email che hai inserito non e' valido");
       mailInfo.innerHTML = `E-mail non valida: ${email}`;
       mailInfo.classList.remove("d-none");
    }
})

//gioco dei dadi contro il PC

let dadi = document.getElementById('dadi');
let play = document.getElementById('play');
let result = document.getElementById('result')


play.addEventListener('click', function(){
    let computer = Math.floor(Math.random() * 6 + 1);
    let player = Math.floor(Math.random() * 6 + 1);
    console.log(computer,player)
    if(computer>player)
    {
        dadi.innerHTML= 'PC: '+computer+ ' - ' +player+' :Player';        result.innerHTML= 'Bella partita! Ritenta, sarai pi&ugrave fortunato...';

    }else if(computer<player){
        dadi.innerHTML= 'PC: '+computer+ ' - ' +player+' :Player';
        result.innerHTML= 'Che fortuna! Mi hai battuto!';

    }else{
        dadi.innerHTML= 'PC: '+computer+ ' - ' +player+' :Player';        result.innerHTML= 'Ops, abbiamo pareggiato...';
        
    };
});


