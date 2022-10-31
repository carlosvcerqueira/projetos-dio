const precoEtanol = 5.79;
const precoGasol = 4.95;
const tipoCombustivel = 'etanol';
const gastoPorKm = 10;
const distanciaVigem = 150;

if (tipoCombustivel === 'gasolina') {
    let custoViagem = (precoGasol * distanciaVigem) / gastoPorKm
    console.log(custoViagem)
} else {
    let custoViagem = (precoEtanol * distanciaVigem) / gastoPorKm
    console.log(custoViagem)
}