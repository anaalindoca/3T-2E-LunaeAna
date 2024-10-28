function criaCartao(categoria,pergunta,resposta){
let container = document.getElementById ("container")
let article = document.createElement("article")
article.className = "cartao"
article.innerHTML = "ANAELUNA"
container.appendChild (article)
}


criaCartao("Biologia","Qual a função da mitocondria","criar atp, para geração de energia")
