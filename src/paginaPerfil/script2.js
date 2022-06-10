


function cadastrar() {
  if (titulo.value == "") {
    alert("Preencha o formulário corretamente!");
    titulo.focus();
    return;
  }
  if (resumo.value == "") {
    alert("Preencha o formulário corretamente!");
    resumo.focus;
    return;
  }
  if (ano.value == "") {
    alert("Preencha o formulário corretamente!");
    ano.focus;
    return;
  }
  if (area.value == "") {
    alert("Preencha o formulário corretamente!");
    area.focus;
    return;
  }
  if (estado.value == "") {
    alert("Preencha o formulário corretamente!");
    estado.focus;
    return;
  }
  if (proprietario.value == "") {
    alert("Preencha o formulário corretamente!");
    proprietario.focus;
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
      tituloUser: titulo.value,
      resumoUser: formulario.resumo.value,
      anoUser: formulario.ano.value,
      areaUser: formulario.area.value,
      estadoUser: formulario.estado.value,
      proprietarioUser: formulario.proprietario.value,
      contatoUser: formulario.contato.value,
    });

  localStorage.setItem("listaUser", JSON.stringify(listaUser))

  alert("Livro cadastrado com sucesso!");
  window.location.href = "../paginaPerfil/cadastroLivros.html"
}











