class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor (marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularViagem(km, precoGas) {
        return km * this.gastoMedioKm * precoGas;
    }
}

const gol = new Carro('VW', 'Prata', 1/12);
const palio = new Carro('Fiat', 'Palio', 1/15)


console.log(gol.calcularViagem(63, 4.89));
console.log(palio.calcularViagem(63, 5));


