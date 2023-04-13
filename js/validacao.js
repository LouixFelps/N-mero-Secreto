
function validarValor(numeroFalado, chute){
    const numero = +numeroFalado
    
   if(Number.isNaN(numero) && numeroFalado != 'game over'){
        chute.innerHTML += '<div>Por favor, fale um valor válido</div>'
        return
    }else if(numeroFalado === 'game over'){
        document.body.innerHTML = `<style>
        body{
            background-color: #FF1600;
        }
        </style>
        <div class="fim"><i class="fa-sharp fa-solid fa-skull"></i> Game Over <i class="fa-sharp fa-solid fa-skull"></i></div>
        <button id="restart" class="btn-jogar">Jogar Novamente</button>`
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
