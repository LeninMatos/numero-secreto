const menorValor = 1;
const maiorValor = 100;

const numeroScereto = gerarNumeroAleatorio(); /*gravar o número aleatório em uma constante*/

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Numero secreto :', numeroScereto)

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;
