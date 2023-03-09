function verificaSeOChutePossuiUmValorValido(params) {
    const numero = +chute /*transforma o numero em inteiro*/

    if (chuteForInvalido(numero)) {
        console.log('Valor Inválido')
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero)) {
        console.log(`valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}


function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}