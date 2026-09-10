//Exemplo de classe com padrão de projeto Singleton

class Pessoa {

    static myself;

    constructor() {
        if(Pessoa.myself){
            return Pessoa.myself;
        }
        this.nome = "Walmir";
        Pessoa.myself = this;
    }

    static instance() {
        if(!Pessoa.myself) {
            return new Pessoa()
        }
        return Pessoa.myself;
    }

}

let pessoa1 = new Pessoa();
let pessoa2 = new Pessoa();
console.log(pessoa1.nome)
console.log(pessoa2.nome)