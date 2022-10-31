let preco = 10;
const formaPagamento = 1;

if (formaPagamento === 1) {
    preco = preco - preco * 0.1
    console.log('Pagamento no débito: R$' + preco)
} else if (formaPagamento === 2) {
    preco = preco - preco * 0.15
    console.log('Pagamento no dinheiro ou PIX: R$' + preco)
} else if (formaPagamento === 3) {
    preco = preco / 2
    console.log('Pagamento no crédito em 2x de R$' + preco)
} else {
    preco = preco + preco * 0.1
    console.log('Pagamento no crédito em 3x ou mais: R$' + preco)
}