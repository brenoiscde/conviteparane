const botao = document.getElementById("button-nao")
botao.addEventListener("mouseenter", () =>{
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const maxX = larguraJanela - botao.offsetWidth;
    const maxY = alturaJanela - botao.offsetHeight;

    const posX = Math.floor(Math.random() * maxX);
    const posY = Math.floor(Math.random() * maxY);

    botao.style.left = `${posX}px`;
    botao.style.top = `${posY}px`;
});
