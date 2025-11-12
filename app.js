function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo" tabindex="0" role="button" aria-pressed="false" aria-label="Cartão de categoria ${categoria}">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
        const conteudo = cartao.querySelector('.cartao__conteudo');
        conteudo.setAttribute('aria-pressed', respostaEstaVisivel.toString());
    }

    cartao.addEventListener('click', viraCartao)
    cartao.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            viraCartao();
        }
    });

    container.appendChild(cartao);
}
