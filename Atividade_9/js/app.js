//import {Pessoa} from "./Pessoa.js"

const botaoAcao = document.getElementById('actionButton');
const divResposta = document.getElementById('resposta');
let txtNome = document.getElementById(`userInput`)

 botaoAcao.addEventListener('click', function() { 
 let mensagem =` Olá, ${txtNome.value}!`; 
  divResposta.textContent = mensagem; 
  });


// botaoAcao.addEventListener('click', function() {
  
//   let pessoa1 = new Pessoa(nome)
//  // const mensagem = pessoa1.ExibirNome(nome)
//    let mensagem = pessoa1.ExibirNome(nome.value)
//   divResposta.innerHTML = mensagem
  
// });