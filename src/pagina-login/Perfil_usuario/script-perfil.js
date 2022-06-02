let userLogado = JSON.parse(localStorage.getItem("userLogado"))

let logado = document.querySelector("#logado")
let email = document.querySelector("#email")
let telefone = document.querySelector("#telefone")
let endereco = document.querySelector("#endereco")
let instituicao = document.querySelector("#instituicao")

logado.innerHTML = `Olá ${userLogado.nome}`
opcoes.innerHTML = `${userLogado.opcoes}`
email.innerHTML = `Email: ${userLogado.email}`
telefone.innerHTML = `Telefone: ${userLogado.telefone}`
endereco.innerHTML = `Endereço: ${userLogado.endereco}`
instituicao.innerHTML = `Instituição: ${userLogado.instituicao}`

if (localStorage.getItem("token") == null){
    alert("Você precisa estar logado para acessar essa página")

    window.location.href = "../pagina-login/login.html"
}

function sair(){

localStorage.removeItem("token")

window.location.href = "../pagina-login/login.html"

}