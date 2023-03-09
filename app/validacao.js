function verificaSeOChutePossuiUmValorValido(params) {
    const numero = +chute /*transforma o numero em inteiro*/

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div>valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroScereto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroScereto}</h3>
        `
        
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}