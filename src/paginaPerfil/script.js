let userLogado = JSON.parse(localStorage.getItem("userLogado"));
document.getElementById("nomeTitulo").innerHTML = userLogado.nome;

function cadastrar() {
  if (nome.value == "" || nome.value.length < 2) {
    alert("Preencha o formulário corretamente!");
    nome.focus();
    return;
  }
  if (instituicao.value == "" || instituicao.value.length < 3) {
    alert("Preencha o formulário corretamente!");
    instituicao.focus();
    return;
  }
  if (cidade.value == "" || cidade.value.length < 2) {
    alert("Preencha o formulário corretamente!");
    cidade.focus();
    return;
  }
  if (disciplinas.value == "" || disciplinas.value.length < 4) {
    alert("Preencha o formulário corretamente!");
    disciplinas.focus();
    return;
  }
  if (contato.value == "" || contato.value.length < 6) {
    alert("Preencha o formulário corretamente!");
    contato.focus();
    return;
  }

  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

  listaUser.push(
    {
      nomeUser: nome.value,
      instituicaoUser: formulario.instituicao.value,
      cidadeUser: formulario.cidade.value,
      disciplinasUser: formulario.disciplinas.value,
      contatoUser: formulario.contato.value,
    });

  localStorage.setItem("listaUser", JSON.stringify(listaUser))

  alert("Tutoria cadastrada com sucesso!");
  window.location.href = "../página Tutorias/paginaTutorias.html"
}











