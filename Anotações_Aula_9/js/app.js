const nome = document.getElementById("txtNome");
const botao = document.getElementById("btnExibir");
const r = document.getElementById("resp");

botao.addEventListener("click", function(){
    r.innerHTML = `Olá ${nome.value}`;
    
});

//  import { Pessoa } from  "./Pessoa";
// let res = document .getElementById(`r`)
// let pessoa1 = new Pessoa(`Cleide`)

// res.innerHTML = pessoa1.exibirNome()