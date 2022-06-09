# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/04-Projeto%20de%20Interface.md"> Projeto de Interface</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/08-Plano%20de%20Testes%20de%20Software.md"> Plano de Testes de Software</a>

Os testes funcionais realizados na aplicação web são descritos a seguir.

<ol>
  <li> CT-01: Verificar o funcionamento dos links da página Home.
    
https://user-images.githubusercontent.com/100447878/171462737-614517fb-0ac3-4da3-a871-0fcdf3a8600a.mov

  </li>
  <li> CT-02: Verificar o funcionamento do filtro de pesquisa.
    
![Filtro com retorno](https://user-images.githubusercontent.com/100447878/171465039-94bfaaac-242c-4e5f-a573-039c42cf544f.png)
  <br>
  <p> No caso abaixo, o termo digitado não fazia parte das informações cadastradas dos livros. Assim, não houve retorno de livros registrados.</p>
    
![Filtro sem retorno](https://user-images.githubusercontent.com/100447878/171465662-3ff5786a-4e30-450f-85e1-776e46892516.png)

  </li>
  <li> CT-03: Verificar detalhes dos livros.
      
![Informações-Livros](https://user-images.githubusercontent.com/100447878/171466782-1cab428c-ae84-4000-af0f-f4a328d06055.png)

  <p> Todas as informações cadastradas sobre os livros no JSON estão disponibilizadas na página Livros.</p>
 
![Banco de dados-JSON](https://user-images.githubusercontent.com/100447878/171467041-59b0d788-575a-4898-86a5-fcf345bb0fc5.png)

  </li>
    
  <li> CT-04: Verificar o cadastro de usuários.
   
   <p>Usuário preenche os campos "Senha" e "Confirmaçāo de Senha" com valores diferentes.</p>
      
  ![Screen Shot 2022-06-01 at 15 14 13](https://user-images.githubusercontent.com/81182674/171474105-64632f30-5457-4366-852d-68145a28b2b3.png)
    
  </li>
  
  <p>Verificar se o usuário foi cadastrado.</p>
    
 ![Screen Shot 2022-06-01 at 14 57 22](https://user-images.githubusercontent.com/81182674/171472447-009af414-aaa4-45fb-abb8-e76a23430875.png)
    
  <p> Informações armazenadas no LocalStorage após usuário se cadastrar.</p>
    
  ![Screen Shot 2022-06-01 at 15 20 21](https://user-images.githubusercontent.com/81182674/171475137-83469b08-7778-4391-a725-ad4b3b3d2a77.png)
  
  </li>
  
  <li> CT-05: Verificar o login de usuários.
  
  </li>
  
  <li> CT-06: Verificar o cadastro de livros.
  <p> Mensagem de confirmação de cadastro do livro.</p>
  
  ![Captura de Tela 2022-06-09 às 14 39 57](https://user-images.githubusercontent.com/100447878/172911065-74eecec8-ad3e-4741-89ad-f0c8e6707659.png)
  
  <p> Informações armazenadas no LocalStorage após o usuário cadastrar o livro.</p>
  
  ![Captura de Tela 2022-06-09 às 14 40 30](https://user-images.githubusercontent.com/100447878/172911094-cf3b979b-1141-45db-8ff0-1e4311b7556e.png)

  </li>
  
  <li> Verificar o cadastro de tutores.
  <p> Mensagem de confirmação de cadastro do tutor.</p>
  
  ![Captura de Tela 2022-06-09 às 14 48 43](https://user-images.githubusercontent.com/100447878/172912425-b499f7ed-3e6e-4cff-80ea-ace11d33b95c.png)
  
  <p> Informações armazenadas no LocalStorage após o usuário cadastrar a tutoria.</p>
  
  ![Captura de Tela 2022-06-09 às 14 49 08](https://user-images.githubusercontent.com/100447878/172912536-197b5ce3-abad-4072-a447-12532cf6e4ff.png)

  </li>
  
  </ol>
    

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.
