class Dog {

    #varPrivada;

    constructor(newName = "") {
        this.life = 500;
        this.dogName = newName;
    }

    setVarPrivada(valor){
        this.#varPrivada = valor;
    }

    getVarPrivada(){
        return this.#varPrivada;
    }

}

let cachorro1 = new Dog();
console.log(cachorro1.dogName);