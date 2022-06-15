# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/03-Metodologia.md"> Metodologia</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/05-Arquitetura%20da%20Solução.md"> Arquitetura da Solução</a>


### Tela de Cadastro (RF-001)

O acesso a tela de cadastro poderá ser feito através da opção de menu “Cadastre-se”. As estruturas de dados foram baseadas em HTML e CSS.

Exemplo da tela de cadastro: 


![Untitled Diagram-Page-1 drawio](https://user-images.githubusercontent.com/81182674/168495024-300e1d7f-128d-4243-9561-8499c0ddf770.png)



#### Requisito atendido

RF-001: O site deve permitir ao usuário cadastrar uma conta.


#### Artefatos da funcionalidade

●cadastre-se.html

●cadastro.css


#### Estrutura de Dados

●[cadastre-se.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/src/cadastro/cadastre-se.html)


#### Instruções de acesso

Abra um navegador de Internet e informe a seguinte URL: (colocar URL)

Ao clicar em “Cadastre-se” no canto superior direito da tela, terá acesso a página de cadastro.

<hr>

### Tela de Login (RF-002)

O acesso a tela de login poderá ser feito através do menu “Entrar”. As estruturas de dados foram baseadas em HTML e CSS.

Exemplo da tela de login: 


![pagina-login](https://user-images.githubusercontent.com/98122346/168496445-2cd1d62a-962c-47b3-b6f1-bb6ba6b55c54.jpeg)


#### Requisito atendido

RF-002: O site deve permitir ao usuário fazer o login da sua conta.

#### Artefatos da funcionalidade

●	login.html <br>
●	style-login.css

#### Estrutura de Dados

●	[login.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/src/pagina-login/login.html)


#### Instruções de acesso

1.	Abra um navegador de Internet e informe a seguinte URL: (colocar URL)
2.	Ao clicar em “Entrar” no canto superior direito da tela, terá acesso a página de login.

<hr>

### Filtro de pesquisa (RF-003)

O filtro de pesquisa está disponível nas páginas de Livros e Tutorias. O acesso às páginas de Livros e Tutorias poderá ser feito através menu superior. As estruturas de dados foram baseadas em HTML, CSS e JS.

Exemplo do filtro de pesquisa na tela de Livros:

![Captura de Tela 2022-06-15 às 11 49 39](https://user-images.githubusercontent.com/100447878/173857385-bd1ea51a-2ba7-43e5-ac71-6502b1a13773.png)


#### Requisitos atendidos

RF-003	O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar livros e disciplinas das tutorias disponíveis.


#### Artefatos da funcionalidade

●	paginaLivros.html 

●	style-livros.css


#### Estrutura de Dados

●[paginaLivros.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/src/paginaLivros/paginaLivros.html)


#### Instruções de acesso
1.	Abra um navegador de Internet e informe a seguinte URL: (colocar URL)
2.	Ao clicar em “Livros” no canto superior direito da tela, terá acesso a página de livros e ao filtro de pesquisa.
3.	Digite o termo que deseja pesquisar no filtro de pesquisa.
4.	Veja os resultados da sua pesquisa na tela.

<hr>

### Tela de Livros (RF-006, RF-007)

O acesso a tela de livros poderá ser feito através da opção de menu “Livros”. As estruturas de dados foram baseadas em HTML e CSS.

Exemplo da tela de Livros:

![Captura de Tela 2022-06-15 às 10 54 01](https://user-images.githubusercontent.com/100447878/173845088-cdca11c1-3496-42f1-a3f7-9eb0aba491ed.png)


#### Requisitos atendidos
 
 RF-006 O site deve apresentar, para cada livro, uma imagem correspondente à capa
 
 RF-007	O site deve permitir ao usuário visualizar os detalhes do livro


#### Artefatos da funcionalidade

●	paginaLivros.html 

●	style-livros.css

●	db.js

●	mobile-navbar.js

#### Estrutura de Dados

●[paginaLivros.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/src/paginaLivros/paginaLivros.html)


#### Instruções de acesso
1.	Abra um navegador de Internet e informe a seguinte URL: (colocar URL)
2.	Ao clicar em “Livros” no canto superior direito da tela, terá acesso a página de livros.

<hr>

### Tela de Tutores (RF-008)

O acesso a tela de Tutores poderá ser feito através do menu, na opção “Tutorias”. As estruturas de dados foram baseadas em HTML e CSS.

Exemplo da tela de Tutores: 
![image](https://user-images.githubusercontent.com/101907319/168500482-ee35c4ed-f244-4db4-9f75-3a3a1847787d.png)

### Requisito atendido

RF-008	O site deve permitir ao usuário visualizar os detalhes dos tutores.

### Artefatos da funcionalidade

●	Código Tutoria tentativa 1

### Estrutura de Dados

●	[tutores.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/66236635d623a76c6dd572e09003b08a03bbe0b7/src/C%C3%B3digo%20Tutoria%20tentativa%201)

### Instruções de acesso

1.	Abra um navegador de Internet e informe a seguinte URL: (colocar URL)
	
2.	Clicar na opção “Tutores” no canto superior direito da tela (na barra de Menu), e terá acesso a página de Tutores.

<hr>

### Tela de Perfil (RF-009)

O acesso a tela de perfil é feito após o login do usuário na página Login, disponível no menu superior. As estruturas de dados foram baseadas em HTML e CSS.

Exemplo da tela de Perfil:

![Captura de Tela 2022-06-15 às 11 48 32](https://user-images.githubusercontent.com/100447878/173857481-7c32caf4-26f0-4f6a-8c92-3199552ebaed.png)


#### Requisitos atendidos
 
RF-009	O site deve permitir ao usuário verificar as informações registradas no cadastro na página Perfil, após fazer seu login.


#### Artefatos da funcionalidade

●	perfil.html 

●	style.css

●	perfil.js

●	mobile-navbar.js

#### Estrutura de Dados

●[perfil.html](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/src/paginaPerfil/perfil.html)


#### Instruções de acesso
1.	Abra um navegador de Internet e informe a seguinte URL: (colocar URL)
2.	Ao clicar em “Cadastrar” no canto superior direito da tela, terá acesso a página de cadastro.
3.	Digite suas informações pessoais nos campos indicados e clique em "Cadastrar".
4.	Após o cadastro, terá acesso ä tela de login.
5.	Informe seu e-mail e senha cadastrados e terá acesso ä página de Perfil.

