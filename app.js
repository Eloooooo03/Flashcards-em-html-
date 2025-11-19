function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    let conteudo = document.createElement('div');
    conteudo.className = 'cartao__conteudo';
    
    let h3 = document.createElement('h3');
    h3.textContent = categoria;

    let perguntaDiv = document.createElement('div');
    perguntaDiv.className = 'cartao__conteudo__pergunta';
    let perguntaP = document.createElement('p');
    perguntaP.textContent = pergunta;
    perguntaDiv.appendChild(perguntaP);

    let respostaDiv = document.createElement('div');
    respostaDiv.className = 'cartao__conteudo__resposta';
    let respostaP = document.createElement('p');
    respostaP.textContent = resposta;
    respostaDiv.appendChild(respostaP);

    conteudo.appendChild(h3);
    conteudo.appendChild(perguntaDiv);
    conteudo.appendChild(respostaDiv);

    cartao.appendChild(conteudo);

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}
