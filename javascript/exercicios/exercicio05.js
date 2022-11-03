class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura)
    }

    classificarImc() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade grave')
        }
    }
}

const pessoa = new Pessoa ('José', 70, 1.75);
const pessoa2 = new Pessoa ('Carlos', 152, 1.79)

console.log(pessoa.classificarImc());
console.log(pessoa2.classificarImc());