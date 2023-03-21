let nome = document.querySelector("#nome");
let  email = document.querySelector("#email");
let mensagem = document.querySelector("#mensagem");
let button = document.querySelector("#meuBotao");


function sendWhatsapp (nome, email, mensagem) {
  const text = `nome:${nome}, meu e-mail:${email}, minha mensagem é:${mensagem}`;
  const whatsNumber = "5583981471674"
  const URL = `https://wa.me/${whatsNumber}?text=${text}`
  window.open(URL,"_blank");
}

function subimitForm () {
    if(nome.value &&
    email.value &&
    mensagem.value){
        sendWhatsapp(nome.value,
            email.value,
            mensagem.value)   
    };
} 

    
button.addEventListener("click", subimitForm);
 
