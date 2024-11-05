function criaCartao(categoria,pergunta,resposta){
let container = document.getElementById ("container")
let article = document.createElement("article")
article.className = "cartao"
article.innerHTML = `
<div class= "cartao-conteudo"> 

<h3> ${categoria} </h3>

<div class= "cartao-conteudo-pergunta">

    <p> ${pergunta} </p>
    </div>

<div class = "cartao-conteudo-resposta">

    <p> ${resposta}  </p>
   </div>
</div>
`
container.appendChild (article)
}


criaCartao("Biologia","QUAL É A FUNÇÃO DA MITOCONDRIA?","CRIAR ATP, PARA A GERAÇÃO DE ENERGIA")
criaCartao("Matemática","COMO É DEFINIDO UM GRUPO?","É UM CONJUNTO MOVIDO DE UMA OPERAÇÃO ONDE ESTÁ É FECHADA NO CONJUNTO E TEM ALGUMAS PROPRIEDADES")
