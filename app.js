function criacartao(cartegoria,pergunta,resposta){
    let container=
    document.getElementById('container')
    let cartao =document.createElement('article')
    cartao.classname='cartao'
}
cartao.interHTML='
<div class=<"cartao_conteudo">
<h3> ${cartegoria} </h3>
<div class="cartao_conteuo_prgunta">
<p> ${pergunta} </p>
</div>
<div class="cartao_conteudo_resposta">
<p> ${resposta} </p>
</div>
</div>