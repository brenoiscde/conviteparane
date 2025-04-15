const botao = document.getElementById("button-nao");
const carta = document.querySelector('.img-convite');
const cartaAberta = document.querySelector('.pergunta');
const respostanegativa = document.querySelector('.resposta-negativa')
const area = document.querySelector('.area');
const resposta = document.querySelector('.resposta');
botao.addEventListener("mouseenter", () =>{


  const posX = Math.floor(Math.random() * 900);
  const posY = Math.floor(Math.random() * 600);

  botao.style.left = `${posX}px`;
  botao.style.top = `${posY}px`;
});

carta.addEventListener('click', ()=>{
    cartaAberta.style.display = "flex";
    carta.style.display = "none"
})

const botaoSim = document.getElementById("button-sim");
const container = document.querySelector(".coracoes-container");

botaoSim.addEventListener("click", () => {
    cartaAberta.style.display = "none"
    resposta.style.display = "flex"
   
});

botao.addEventListener('click', ()=>{
    cartaAberta.style.display = "none"
    respostanegativa.style.display = "flex"
})
