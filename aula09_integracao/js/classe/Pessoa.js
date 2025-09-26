export class Pessoa{
    constructor(_nome){
        this._nome = _nome
    }
    get nome(){
        return this._nome
    }
    set nome(nome){
        this ._nome = nome
    }
    
    exibirNome(){
        return `Olá ${this._nome} Seja Bem Vindo`
    }
    
}