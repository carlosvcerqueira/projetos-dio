class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} is older than ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} is older than ${p1.nome}.`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} have the same age.`)
    }
}

const pessoa1 = new Pessoa('Carlos', 85);
const pessoa2 = new Pessoa('Ana', 76);

compararPessoas(pessoa1, pessoa2);
