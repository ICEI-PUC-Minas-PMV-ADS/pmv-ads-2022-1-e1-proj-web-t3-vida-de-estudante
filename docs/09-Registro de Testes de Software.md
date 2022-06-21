# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/04-Projeto%20de%20Interface.md"> Projeto de Interface</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/08-Plano%20de%20Testes%20de%20Software.md"> Plano de Testes de Software</a>

Os testes funcionais realizados na aplicação web são descritos a seguir.

<ol>
  <li> CT-01: Verificar o funcionamento dos links da página Home.

https://user-images.githubusercontent.com/100447878/174854223-c457e6ca-a9ce-48d3-aba9-b9e617132f31.mov

  </li>
  <hr>
  
  <li> CT-02: Verificar o funcionamento do filtro de pesquisa.
    
  <p>Filtro da página Livros:</p>
    
![Captura de Tela 2022-06-21 às 13 50 15](https://user-images.githubusercontent.com/100447878/174855824-6afdd9f8-9d77-4e2d-b20b-bd62977586ea.png)

  <p>Filtro da página Tutorias:</p>
    
![Captura de Tela 2022-06-21 às 13 56 27](https://user-images.githubusercontent.com/100447878/174856220-f128f9d7-0e78-46e9-a80c-56545101d0d2.png)

  <p> No caso abaixo, o termo digitado não fazia parte das informações cadastradas dos livros. Assim, não houve retorno de livros registrados.</p>
    
![Captura de Tela 2022-06-21 às 13 56 09](https://user-images.githubusercontent.com/100447878/174856402-2a4e38b6-bf79-4ec0-8b3e-26063f99f4e1.png)

  </li>
  <hr>
  
  <li> CT-03: Verificar detalhes dos livros.
      
![Captura de Tela 2022-06-21 às 14 00 59 (2)](https://user-images.githubusercontent.com/100447878/174856950-9d27862f-5d4d-407b-95f3-70e9b152dc49.png)

  </li>
  <hr>
  
  <li> CT-04: Verificar o cadastro de usuários.
   
   <p>Usuário preenche os campos "Senha" e "Confirmaçāo de Senha" com valores diferentes.</p>
      
  ![Screen Shot 2022-06-01 at 15 14 13](https://user-images.githubusercontent.com/81182674/171474105-64632f30-5457-4366-852d-68145a28b2b3.png)
    
  </li>
  
  <p>Verificar se o usuário foi cadastrado.</p>
    
 ![Screen Shot 2022-06-01 at 14 57 22](https://user-images.githubusercontent.com/81182674/171472447-009af414-aaa4-45fb-abb8-e76a23430875.png)
    
  <p> Informações armazenadas no LocalStorage após usuário se cadastrar.</p>
    
  ![Screen Shot 2022-06-01 at 15 20 21](https://user-images.githubusercontent.com/81182674/171475137-83469b08-7778-4391-a725-ad4b3b3d2a77.png)
  
  </li>
  <hr>
  
  <li> CT-05: Verificar o login de usuários.
  
   <p>Usuário preenche os campos "Email" e "Senha" com valores diferentes do usuário já cadastrado.</p>
  
  ![8d33f1db-e0a7-4e41-b956-fde91ac31c63](https://user-images.githubusercontent.com/98122346/174851091-f201d92d-02f9-45c0-8b00-e66358158d8d.jpg)


  <p>Se as informações de usuário forem válidas, o login será bem sucedido.</p>
  
 ![c555f947-3721-4eee-ad97-5042ce9e6c5e](https://user-images.githubusercontent.com/98122346/174853350-696ef44f-cbc9-4cad-a0e5-7c51d3a67d4b.jpg)


  <p> Informações armazenadas no LocalStorage do usuário logado.</p>
  
  ![af4b5123-e45f-4356-bd53-11b5c75cb78f](https://user-images.githubusercontent.com/98122346/174853422-4572412d-173c-457b-ade9-7d7fc997445e.jpg)


  </li>
  <hr>
  
  <li> CT-06: Verificar o cadastro de livros.
  <p> Mensagem de confirmação de cadastro do livro.</p>
  
![Captura de Tela 2022-06-20 às 10 59 35](https://user-images.githubusercontent.com/100447878/174618714-d412521c-efd1-4478-b332-d665cb4819b3.png)

  <p> Registro disponível na página Livros após o usuário cadastrar o livro.</p>
  
 ![Captura de Tela 2022-06-20 às 11 00 10](https://user-images.githubusercontent.com/100447878/174618763-01d57f74-5d63-4426-aa27-b80460ab4eb7.png)

  <p> Informações armazenadas no LocalStorage após o cadastro do livro.</p>
  
  ![Captura de Tela 2022-06-20 às 11 20 36](https://user-images.githubusercontent.com/100447878/174625024-bf1bfaa9-09d1-492f-9788-46fe2db2bcd3.png)

  <p> No exemplo abaixo, o usuário tenta fazer o cadastro do livro de maneira incorreta, sem preencher todos os campos, o que não finaliza o cadastro.</p>
  
  ![Captura de Tela 2022-06-20 às 18 18 21](https://user-images.githubusercontent.com/100447878/174681754-67715346-f63d-411e-be8d-5478d0ab3ea4.png)
  
  ![Captura de Tela 2022-06-20 às 18 19 40](https://user-images.githubusercontent.com/100447878/174681892-d0da3606-faf5-46cb-aea0-388fc43eaa98.png)

  </li>
  <hr>
  
  <li> CT-07: Verificar o cadastro de tutores.
  <p> Mensagem de confirmação de cadastro do tutor.</p>
  
  ![Captura de Tela 2022-06-20 às 17 08 45](https://user-images.githubusercontent.com/100447878/174672573-9931aecc-bdb5-42b6-a871-789fb1c20ec5.png)
  
  <p> Registro disponível na página Tutorias após o usuário cadastrar o tutor.</p>
  
  ![Captura de Tela 2022-06-20 às 17 10 30](https://user-images.githubusercontent.com/100447878/174672695-33567773-fd84-4b7a-9cd4-b3a23bf574d2.png)

  <p> Informações armazenadas no LocalStorage após o usuário cadastrar o tutor.</p>
  
  ![Captura de Tela 2022-06-20 às 17 11 47](https://user-images.githubusercontent.com/100447878/174672723-dad9ca49-4c29-405e-a01d-dc80c335818e.png)
  
  <p> No exemplo abaixo, o usuário tenta fazer o cadastro do tutor de maneira incorreta, sem preencher todos os campos, o que não finaliza o cadastro.</p>
  
  ![Captura de Tela 2022-06-20 às 19 00 37](https://user-images.githubusercontent.com/100447878/174682863-8eb977c9-4f11-4221-a7f4-c7faadffdfb2.png)

  ![Captura de Tela 2022-06-20 às 19 00 41](https://user-images.githubusercontent.com/100447878/174682874-1581496d-fca5-418a-9fe9-105d5789f6c9.png)

  </li>
  <hr>
  
  <li> CT-08: Verificar a página de Tutores.
    
  ![Captura de Tela 2022-06-20 às 18 40 10](https://user-images.githubusercontent.com/100447878/174680988-44d52b0f-3397-4744-86bc-7246bff79957.png)

  <hr>
  
  <li> CT-09: Verificar a página de perfil de usuários cadastrados.
  
![Captura de Tela 2022-06-20 às 10 50 33](https://user-images.githubusercontent.com/100447878/174616506-d93f95de-3bd7-44f2-9323-d8bf0b3b4b2b.png)


  </li>
  
  </ol>
    

## Avaliação

Os testes de software mostraram que os requisitos priorizados foram atendidos, funcionando como planejado. Para as próximas iterações, serão acrescentadas melhorias no layout e responsividade da aplicação.
