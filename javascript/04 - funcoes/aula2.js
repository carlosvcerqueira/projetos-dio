function escreverNome(nome) {
    return `${nome}`
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome('Carlos ' + 'é maior.'))
    } else {
        console.log('menor')
    }
}

verificarIdade(20)