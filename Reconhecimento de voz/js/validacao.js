
function validarValor(numeroFalado, chute){
    const numero = +numeroFalado
    
    if(Number.isNaN(numero)){
        chute.innerHTML += '<div>Por favor, fale um valor válido</div>'
        return
    } 
    if(numeroMaiorOuMenor(numero)){
        chute.innerHTML += `<div>Por favor, fale um valor entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero === numeroSorteado){
        document.body.innerHTML = `<h2 class="titulo">Parabéns, você acertou</h2> 
                                    <h3 class="texto">o número sorteado foi <e class="numero-sorteado">${numeroSorteado}</e>!</h3>
                                    <button id="restart" class="btn-jogar">Jogar Novamente</button>`
    }else if(numero > numeroSorteado){
        chute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
       
    } else{
        chute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
        
    }
}

function numeroMaiorOuMenor(numero){
    if(numero > maiorValor){
        return true
    } if(numero < menorValor){
        return true
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'restart'){
        window.location.reload()
    }
    }
)
