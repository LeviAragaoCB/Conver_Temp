function converterCtoF(tempC) {
    const tempF = (tempC * 9/5) + 32
    console.log(`Temp. em Farenheit = ${tempF} F`)

    /*o return retorna o que é desejado, neste caso a temp convertida que está na variável tempF*/
    return tempF;
}

function converterCtoK(tempC) {
    const tempK = tempC + 273.15;
    console.log(`Temp. em Kelvin = ${tempK} k`);

    return tempK;
}

function converter(temp) {
    console.log('Ei Clicou!', temp);
    /*parseFloat() converte para decimal, pois estava vindo no formato da string, exemplo '18' */
    let tempC = parseFloat(document.getElementById('tempC').value);
    let resultado = 0;

    console.log(`Temp °C: ${tempC}`);

    if (temp === 'F') {
        /*chamando a função que converte de C para F */
        resultado = converterCtoF(tempC);

        /*Exibe o resultado na tag que possui um id chamado "resultado" no HTML*/
    }
    
    else if (temp === 'K'){
        /*chamando a função que converte de C para K */
        resultado = converterCtoK(tempC);
        
        /*Exibe o resultado na tag que possui um id chamado "resultado" no HTML*/
    }

    // temp printa F ou K já
    document.getElementById('resultado').innerHTML = `${resultado} ${temp}`;
    
    document.getElementsByClassName('resultado')[0].style.display = 'flex'
}

function limpar() {
    console.log('Limpou!')
    /*document.getElementsByClassName('resultado')[0].style.display = ' '*/

    /*Limpar(ocultar)*/
    document.getElementsByClassName('resultado')[0].style.display = 'none'
}