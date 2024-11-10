// Tipagem de variáveis e tipos
let nome: string = "Borealis Saile";
let idade: number = 40;
let peso: number = 82;
let ativo: boolean = true;

// Array de strings
let hobbies: string[] = ["Musculação", "Jiu-Jitsu", "Jogos de RPG - Online"];

// Várias propriedades
let endereco: {
    cidade: string;
    estado: string;
    rua: string;
    numero: number;
    cep: string;
} = {
    cidade: "Goiânia",
    estado: "GO",
    rua: "Rua do Coração",
    numero: 123,
    cep: "75010-000"
};

// Adicionando mais hobbies
hobbies.push("Fotebol", "Jogar Truco");

// Mostrando as variáveis no console
console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Ativo: ${ativo}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.cidade}, ${endereco.estado}, ${endereco.cep}`);
