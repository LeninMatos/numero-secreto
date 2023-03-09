const numeroScereto = gerarNumeroAleatorio (); /*gravar o número aleatório em uma constante*/

function gerarNumeroAleatorio() {
    return parseInt(Math.random() *100)
}

console.log('Numero secreto :', numeroScereto)