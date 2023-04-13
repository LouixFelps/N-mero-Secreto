

function gerarNumeroAleatorio(maiorValor){
    return Math.round(Math.random()* maiorValor + 1)
}
const menorValor = 1
const maiorValor = 1000
const numeroSorteado = gerarNumeroAleatorio(maiorValor)

const elementoMenor = document.getElementById('menor-valor')
const elementoMaior = document.getElementById('maior-valor')

elementoMenor.innerHTML = menorValor 
elementoMaior.innerHTML = maiorValor 

console.log(`Número Secreto: ${numeroSorteado}`)