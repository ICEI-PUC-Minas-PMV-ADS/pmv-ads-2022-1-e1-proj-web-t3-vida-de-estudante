# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A descrição do problema e os pontos mais relevantes a serem tratados neste projeto foram estabelecidos com a criação de personas e histórias de usuários que representam as necessidades de estudantes de graduação e usuários em potencial da aplicação web a ser desenvolvida.

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve permitir ao usuário cadastrar uma conta. | ALTA | 
|RF-002| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar livros e disciplinas das tutorias disponíveis.   | ALTA |
|RF-003| O site deve permitir ao usuário fazer o cadastro de livros.   | ALTA |
|RF-004| O site deve permitir ao usuário disponibilizar informações das disciplinas de tutoria e suas informações para contato.   | ALTA |
|RF-005| O site deve apresentar, para cada livro, uma imagem correspondente à capa.   | BAIXA |
|RF-006| O site deve permitir ao usuário visualizar os detalhes do livro.   | MÉDIA |
|RF-007| O site deve permitir salvar livros favoritos.   | MÉDIA |
|RF-008| O site deve permitir verificar os livros salvos como favoritos.  | MÉDIA |
|RF-009| O site deve emitir certificados para as tutorias oferecidas.   | MÉDIA |
|RF-010| O site deve permitir visualizar as informações de contatos do mantenedor do site.   | BAIXA |
|RF-011| O site deve permitir o envio de mensagens para qualquer usuário cadastrado no site.    | MÉDIA |
|RF-012| O site deve permitir ao usuário criar uma lista de amigos.   | MÉDIA |
|RF-013| O site deve permitir ao usuário adicionar contatos à sua lista de amigos.  | MÉDIA |
|RF-014| O site deve permitir fazer comentários sobre os livros.   | BAIXA |
|RF-015| O site deve permitir fazer comentários sobre os tutores.   | BAIXA |
|RF-016| O site deve fornecer a opção de exibir comentários de livros.  | BAIXA |
|RF-017| O site deve fornecer a opção de exibir comentários sobre os tutores.   | BAIXA |
|RF-018| O site deverá apresentar em cada função do sistema (tutoria e troca de livros) 4 botões relativos às 4 áreas de conhecimento em que serão subdivididas as funções, devendo os botões redirecionar o usuário para interface relativa àquela área.  | BAIXA |


### Requisitos Não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet. | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em dispositivos diversos de forma adequada. | ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade. | MÉDIA | 
|RNF-004| O site deve ser compatível com os navegadores mais utilizados do mercado. | ALTA | 
|RNF-005| O site deve estar disponível no período de 24 horas, 7 dias por semana. | ALTA | 
|RNF-006| O site deve conter um sistema de backup para evitar perdas de dados caso ocorram falhas no sistema. | ALTA | 
|RNF-007| O site deve ter alta performance em 95% do tempo. | ALTA | 
|RNF-008| O site deve atender às normas legais, tais como padrões e leis. | ALTA | 
|RNF-009| O software deve ocupar no máximo 5% da capacidade do CPU. | ALTA | 
|RNF-010| O software deve ocupar 3% da memória RAM do dispositivo. | ALTA | 
|RNF-011| Ao contabilizar 1 hora de acesso por um usuário registrado como tutor, o certificado de horas extras deve ser emitido em, no máximo, 10 minutos. | MÉDIA | 
|RNF-012| O sistema deverá ser compatível com as plataformas Windows 8 ou 10, Linux e MacOS. | ALTA | 
|RNF-013| A resposta da funcionalidade de login do sistema não poderá ser superior a 5 segundos. | BAIXA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.


|ID| Restrição                                             |
|--|---------------------------------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 26/06/2022. |
|02| A aplicação web deve se restringir às tecnologias básicas da web no front-end.                          |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.                                           |
