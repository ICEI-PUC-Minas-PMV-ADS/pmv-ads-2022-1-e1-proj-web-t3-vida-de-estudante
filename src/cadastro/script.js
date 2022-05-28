


function cadastrar() {
  if (nome.value == "") {
    alert("Preencha o formulário corretamente!");
    nome.focus();
    return;
  }
  if (email.value == "") {
    alert("Preencha o formulário corretamente!");
    email.focus;
    return;
  }
  if (telefone.value == "") {
    alert("Preencha o formulário corretamente!");
    telefone.focus;
    return;
  }
  if (local.value == "") {
    alert("Preencha o formulário corretamente!");
    local.focus;
    return;
  }
  if (opcoes.value == "") {
    alert("Preencha o formulário corretamente!");
    opcoes.focus;
    return;
  }
  if (endereco.value == "") {
    alert("Preencha o formulário corretamente!");
    endereco.focus;
    return;
  }
  if (Senha.value == "") {
    alert("Preencha o formulário corretamente!");
    Senha.focus;
    return;
  }
  if (ConfirmeSenha.value == "") {
    alert("Preencha o formulário corretamente!");
    endereco.focus;
    return;
  }

  if (Senha.value != ConfirmeSenha.value) {
    alert("As senhas não correspondem!");
    formulario.ConfirmeSenha.focus();
    return false;
  }

  let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

  listaUser.push(
    {
      nomeUser: nome.value,
      emailUser: formulario.email.value,
      telefoneUser: formulario.telefone.value,
      localUser: formulario.local.value,
      opcoesUser: formulario.opcoes.value,
      enderecoUser: formulario.endereco.value,
      SenhaUser: formulario.Senha.value,
      ConfirmeSenhaUser: formulario.ConfirmeSenha.value
    });

  localStorage.setItem("listaUser", JSON.stringify(listaUser))

  alert("Usuário cadastrado com sucesso!");
  window.location.href = "../pagina-login/login.html"
}











