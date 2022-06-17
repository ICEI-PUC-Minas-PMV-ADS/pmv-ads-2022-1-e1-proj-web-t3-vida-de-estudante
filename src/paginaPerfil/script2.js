
let userLogado = JSON.parse(localStorage.getItem("userLogado"));
document.getElementById("nomeTitulo").innerHTML = userLogado.nome;

function cadastrar() {
  if (titulo.value == "" || titulo.value.length < 6) {
    alert("Preencha o formulário corretamente!");
    titulo.focus();
    return;
  }
  if (imagem.value == "" || imagem.value.length < 6) {
    alert("Preencha o formulário corretamente!");
    imagem.focus();
    return;
  }
  if (resumo.value == "" || resumo.value.length < 10) {
    alert("Preencha o formulário corretamente!");
    resumo.focus();
    return;
  }
  if (autor.value == "" || autor.value.length < 4) {
    alert("Preencha o formulário corretamente!");
    autor.focus();
    return;
  } 
  if (ano.value == "" || ano.value.length < 4) {
    alert("Preencha o formulário corretamente!");
    ano.focus();
    return;
  }
  if (area.value == "") {
    alert("Preencha o formulário corretamente!");
    area.focus();
    return;
  }
  if (estado.value == "" || estado.value.length < 2) {
    alert("Preencha o formulário corretamente!");
    estado.focus();
    return;
  }
  if (proprietario.value == "" || proprietario.value.length < 2) {
    alert("Preencha o formulário corretamente!");
    proprietario.focus();
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
      tituloUser: titulo.value,
      imagemUser: formulario.imagem.value,
      resumoUser: formulario.resumo.value,
      autorUser: formulario.autor.value,
      anoUser: formulario.ano.value,
      areaUser: formulario.area.value,
      estadoUser: formulario.estado.value,
      proprietarioUser: formulario.proprietario.value,
      contatoUser: formulario.contato.value,
    });

  localStorage.setItem("listaUser", JSON.stringify(listaUser))

  alert("Livro cadastrado com sucesso!");
  window.location.href = "../paginaLivros/paginaLivros.html"
}











