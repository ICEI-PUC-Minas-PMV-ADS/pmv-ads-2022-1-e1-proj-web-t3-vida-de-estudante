


function cadastrar() {
  if (nome.value == "") {
    alert("Preencha o formulário corretamente!");
    nome.focus();
    return;
  }
  if (instituicao.value == "") {
    alert("Preencha o formulário corretamente!");
    instituicao.focus;
    return;
  }
  if (cidade.value == "") {
    alert("Preencha o formulário corretamente!");
    cidade.focus;
    return;
  }
  if (disciplinas.value == "") {
    alert("Preencha o formulário corretamente!");
    disciplinas.focus;
    return;
  }
  if (contato.value == "") {
    alert("Preencha o formulário corretamente!");
    contato.focus;
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
  window.location.href = "../paginaPerfil/cadastroTutorias.html"
}











