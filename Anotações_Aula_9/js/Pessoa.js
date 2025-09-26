export class Pessoa{
    constructor(_nome){
        this._nome =_nome
    }
    get nome(){
        return this ._nome
    }
    exibirNome(){
        return`Olá ${this.nome}`
    }
}