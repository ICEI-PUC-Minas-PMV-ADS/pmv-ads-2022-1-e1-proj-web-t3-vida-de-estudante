# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da Internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-001:	O site deve permitir ao usuário cadastrar uma conta.</li>
   <li>RF-002:	O site deve permitir ao usuário fazer o login da sua conta.</li>
   <li>RF-005:	O site deve permitir ao usuário disponibilizar informações das disciplinas de tutoria e suas informações para contato.</li>
    <li>RF-007:	O site deve permitir ao usuário visualizar os detalhes do livro.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento do filtro de pesquisa</td>
  <td>
   <ul>
    <li>RF-003:	O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar livros e disciplinas das tutorias      disponíveis.</li>
   </ul>
  </td>
  <td>Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo usuário</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Livros.</li>
    <li>Digitar no filtro de pesquisa algum dado presente na página Livros e verificar se o resultado é exibido na página.</li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro de pesquisa devem mostrar o livro onde há o dado informado.</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
 </tr>
 <tr>
  <td>CT-03: Verificar detalhes dos livros</td>
  <td>
   <ul>
    <li>RF-006:	O site deve apresentar, para cada livro, uma imagem correspondente à capa.</li>
    <li>RF-007:	O site deve permitir ao usuário visualizar os detalhes do livro.</li>
   </ul>
  </td>
  <td>Verificar se todas as informações referentes aos livros estão disponíveis na página Livros</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Livros.</li>
    <li>Visualizar as informações referentes aos livros disponíveis na página.</li>
   </ol>
   </td>
  <td>Todas as informações, incluindo imagens das capas, referentes aos livros estão disponíveis na página Livros.</td>
 </tr>
</table>
