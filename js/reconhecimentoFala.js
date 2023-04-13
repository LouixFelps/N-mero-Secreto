

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

recognition.start()
recognition.addEventListener('result', onSpeak)


const numeros = {
    'zero zero': 0,
    '00': 0,
    '01': 1,
    'um': 1,
    'dois': 2,
    'três': 3,
    'quatro': 4,
    'cinco': 5,
    'seis': 6,
    'sete': 7,
    'oito': 8,
    'nove': 9,
    'dez': 10
 }
 
 const corrigeNumeros = (palavra) => {
    for(numero in numeros){
       if(palavra === numero){
          palavra = numeros[numero];   
       }         
    }
    return palavra;
 }


function onSpeak(e){
    const chute = document.getElementById('chute')
    const numero = corrigeNumeros(e.results[0][0].transcript)

    chute.innerHTML = `<div>Você disse:</div>
    <span class="box">${numero}</span>`
    console.log(corrigeNumeros(e.results[0][0].transcript))
    
    validarValor(numero, chute)
}

recognition.addEventListener('end', () => recognition.start())