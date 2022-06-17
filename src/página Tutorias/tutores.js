var db = {
    dados: [
        {
            foto:'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/Persona1.png?raw=true',
            nome: 'Luiz Campos',
            instituicaoDeEnsino: 'PUC Minas',
            cidade: 'Belo Horizonte',
            disciplinas: 'Engenharia de software, Matemática básica',
            contato: 'luizcampos@pucminas.com'
    

        }, {
            foto: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/persona2.png?raw=true',
            nome: 'Vanessa Alves',
            instituicaoDeEnsino: 'UFMG',
            cidade: 'Belo Horizonte',
            disciplinas: 'História da Arquitetura, Análise e Gestão Ambiental',
            contato: 'vanessaa@ufmg.com'

        }, {
            foto: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/Persona3.png?raw=true',
            nome: 'Luciano Silva',
            instituicaoDeEnsino: 'PUC Minas',
            cidade: 'Belo Horizonte',
            disciplinas: 'Direito Empresarial, Direito Civil',
            contato: 'lucianosilva55@pucminas.com'

        }, {
            foto:'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/Livia.png?raw=true',
            nome: 'Lívia Moreira',
            instituicaoDeEnsino: 'UFRJ',
            cidade: 'Rio de Janeiro',
            disciplinas: 'Anatomia, Pediatria' ,
            contato: 'liviamoreira78@ufrj.com'

        }, {
            foto: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/main/docs/img/persona5.jpeg?raw=true',
            nome: 'Caio Marques', 
            instituicaoDeEnsino: 'UFOP',
            cidade: 'Ouro Preto',
            disciplinas: 'Engenharia de Software',
            contato: 'caiom@ufop.com'

        }, {
             foto: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t3-vida-de-estudante/blob/pagina-tutorias/persona%206.jpg?raw=true',
             nome: "Luiza Aleixo",
             instituicaoDeEnsino: 'UNA',
             cidade: 'Belo Horizonte',
             disciplinas: 'Medicina Veterinária 1, Animais Silvestres',
             contato: 'luizaaleixo98@una.com'

        }
    ]
}

let listaTeste2 = JSON.parse(localStorage.getItem("listaTutores"));
if(listaTeste2 == null){
    localStorage.setItem('listaTutores', JSON.stringify(db));
}

let lista = JSON.parse(localStorage.getItem("listaTutores"));

var tutores = '';
for (i=0; i < lista.dados.length; i++) {
    tutores += `<p class="Tutor-item"><img src="${ db.dados[i].foto }"> <br> Nome: ${ db.dados[i].nome } <br> Instituição de ensino: ${ db.dados[i].instituicaoDeEnsino } <br> Cidade: ${ db.dados[i].cidade } <br> Disciplina(s): ${ db.dados[i].disciplinas } <br> Contato: ${ db.dados[i].contato }</p>`;
}

document.getElementById('lista-Tutor').innerHTML = tutores;
