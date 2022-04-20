# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/01-Documentação%20de%20Contexto.md"> Documentação de Contexto</a></span>

A descrição do problema e os pontos mais relevantes a serem tratados neste projeto foram estabelecidos com a criação de personas e histórias de usuários que representam as necessidades de estudantes de graduação e usuários em potencial da aplicação web a ser desenvolvida.


## Personas

<ol>
<li><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/Persona1.png?raw=true"> Luiz Campos tem 22 anos, é estudante de Sistemas de Informação, cursando o último período. Faz estágio em um banco digital no setor de desenvolvimento de softwares. Utiliza os aplicativos Instagram, Twitter, LinkedIn e Pinterest. Mora em Belo Horizonte (MG), é filho único, seus hobbies são jogar videogame e ouvir música, gosta de tecnologia e inovação. Quer fazer parte de uma rede descontraída de estudantes. Gostaria de auxiliar calouros com dificuldades nos estudos, pois passou por esta situação e não encontrou alguém que pudesse auxiliá-lo. Acredita que a tecnologia ajuda a sociedade a ter uma vida melhor. Sente dificuldade para conhecer pessoas com interesses em comum. Não sabe o que fazer com os livros que comprou e já leu, e acha que estão ocupando muito espaço em sua estante. Está quase se formando, mas ainda precisa cumprir alguns créditos extras da faculdade.</li>
<li><img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/persona2.png?raw=true"> Vanessa Alves tem 18 anos, é estudante de Arquitetura e Urbanismo, cursando o primeiro período. Utiliza os aplicativos Twitter e Instagram. Morava no interior e acabou de se mudar para a capital (Belo Horizonte/MG) para fazer curso superior. Seu hobby é ler livros de suspense e ama arte em geral. Acabou de sair do ensino médio direto para a universidade, se sentindo meio perdida nessa sua nova etapa na vida. Enfrenta dificuldades nos exercícios e já gostaria de estar apta para as avaliações do primeiro semestre e assim não enfrentar maiores dificuldades ao longo do curso. Tem dificuldade em encontrar livros e materiais didáticos para a melhor compreensão das matérias. Não tem círculo de amizades formado ainda para que alguém possa lhe ajudar.</li>
<li>Luciano Silva é estudante de Direito, tem 21 anos, cursa o 5° período e trabalha como estagiário no TJMG. Utiliza os aplicativos LinkedIn, Instagram e Twitter. Saiu do Ensino Médio direto para a faculdade e não teve muito tempo para se adaptar ao novo modelo de estudo, gosta de ler e viajar. Gostaria de sanar dúvidas que tem sobre as matérias do curso e conseguir um acesso mais fácil aos materiais didáticos, podendo realizar trocas e aquisições a um preço mais baixo. Não tem uma rede de contatos na área e gostaria de criar, está disposto a ajudar alunos que estejam iniciando no curso, também busca obter horas extracurriculares para agregar em seu currículo e curso. Sente dificuldades em adquirir os livros jurídicos, devido ao alto custo e a rápida desatualização de edições, sente dificuldades em muitas matérias e não tem muito tempo para estudar.</li> 
<li></li>
<li></li>
<li></li>
</ol>


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                             |PARA ... `MOTIVO/VALOR`                 |
|--------------------|--------------------------------------------------------------------------------|----------------------------------------|
|Usuário do sistema | ajudar estudantes da área de tecnologia que estão com dificuldades nos estudos | para que recebam orientações e não sejam afetados em seu desempenho acadêmico. |
|Usuário do sistema  | participar de uma atividade extra que emita certificados | para cumprir os créditos necessários para concluir minha graduação. |
|Usuário do sistema | acessar os materiais do curso de uma maneira mais fácil | para otimizar meu tempo de estudo e entender melhor o conteúdo. |
|Usuário do sistema | sanar dúvidas que tenho sobre as matérias do curso com alunos que possam ajudar | para entender melhor as matérias e criar uma rede de contatos.|
|Usuário do sistema | auxiliar estudantes que estejam iniciando na área  | ajudar alunos que apresentem dificuldades semelhantes às que eu já tive. |
|Usuário do sistema |conseguir um certificado de horas extracurriculares | para agregar no currículo e computar para a formação.|


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
|RF-010| O site deve permitir o envio de mensagens para qualquer usuário cadastrado no site.    | MÉDIA |
|RF-011| O site deve permitir ao usuário criar uma lista de amigos.   | MÉDIA |
|RF-012| O site deve permitir ao usuário adicionar contatos à sua lista de amigos.  | MÉDIA |
|RF-013| O site deve permitir fazer comentários sobre os livros.   | BAIXA |
|RF-014| O site deve permitir fazer comentários sobre os tutores.   | BAIXA |
|RF-015| O site deve fornecer a opção de exibir comentários de livros.  | BAIXA |
|RF-016| O site deve fornecer a opção de exibir comentários sobre os tutores.   | BAIXA |
|RF-017| O site deverá apresentar em cada função do sistema (tutoria e troca de livros) 4 botões relativos às 4 áreas de conhecimento em que serão subdivididas as funções, devendo os botões redirecionar o usuário para interface relativa àquela área.  | BAIXA |


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
