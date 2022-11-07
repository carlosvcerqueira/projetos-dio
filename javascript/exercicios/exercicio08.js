function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

const preco = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(aplicarDesconto(preco, 10))
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(preco, 15))
} else if (formaPagamento === 3) {
    console.log(preco)
} else {
    console.log(aplicarJuros(preco, 10))
}
