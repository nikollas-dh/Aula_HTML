export class Pessoa{
    constructor(_nome){
        this._nome = nome
    }
    get nome(){
        return this._nome
    }
    ExibirNome(){
        return `Olá ${this.nome}` 
    }
}
