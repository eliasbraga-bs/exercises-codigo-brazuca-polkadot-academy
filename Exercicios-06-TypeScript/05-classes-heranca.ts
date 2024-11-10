class Animal {
    nome: string;
    som: string;

    constructor(nome: string, som: string) {
        this.nome = nome;
        this.som = som;
    }

    emitirSom(): string {
        return `${this.nome} faz ${this.som}`;
    }
}

class Cachorro extends Animal {
    raca: string;

    constructor(nome: string, som: string, raca: string) {
        super(nome, som);
        this.raca = raca;
    }

    // Método para latir mais forte dependendo da raça
    latirForte(): void {
        if (this.raca === "Labrador") {
            this.som = "AU AU!!! (latido forte)";
        } else if (this.raca === "Beagle") {
            this.som = "Auuu Auuu (latido forte)";
        } else {
            this.som = "ARF ARF (latido comum)";
        }
    }
}

// Criando instâncias
const rex = new Cachorro("Rex", "au au", "Labrador");
console.log(rex.emitirSom());
rex.latirForte();
console.log(rex.emitirSom());

const snoopy = new Cachorro("Snoopy", "au au", "Beagle");
console.log(snoopy.emitirSom());
snoopy.latirForte();
console.log(snoopy.emitirSom()); 