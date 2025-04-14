function exibirErro(mensagem){
    let saida = document.getElementById('saida');

    if (saida instanceof HTMLParagraphElement){ 
        saida.textContent = 'Erro: ' + mensagem;
    }
}

function validarMaior(){
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let maior;
      //prettier-ignore
      if((num1 instanceof HTMLInputElement) 
        && (num2 instanceof HTMLInputElement)){
        let numero1 = Number(num1.value);
        let numero2 = Number(num2.value);
            if(numero1 > numero2){
                maior = numero1;
                return maior;
            }else{
                maior = numero2;
                return maior;
            }
    }
}
function validarMenor(){
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let menor;
      //prettier-ignore
      if((num1 instanceof HTMLInputElement) 
        && (num2 instanceof HTMLInputElement)){
        let numero1 = Number(num1.value);
        let numero2 = Number(num2.value);
            if(numero1 > numero2){
                menor = numero2;
                return menor;
            }else{
               menor = numero1;
                return menor;
            }
    }
}
function exibirConteudo(multiplos){
    let saida = document.getElementById('saida');

    if (saida instanceof HTMLParagraphElement){ 
        saida.textContent = 'Multiplos de 5: ' + multiplos;
    }
}


function calcular(num1, num2){
    let numero1 = Number(num1.value);
    let numero2 = Number(num2.value);
    try{
        if(numero1 === numero2){
            throw new Error('Digite números diferentes!.');
        }
        let maior = validarMaior();
        let menor = validarMenor();
        if(maior != null && menor != null){
            let multiplos = 0;
            for(menor; menor <= maior; menor += 5){
                multiplos += 1;
            }
            exibirConteudo(multiplos);
        }else{
            throw new Error('Valores Nulos!.');
        }
        
    }catch(error){
        exibirErro(error.message);
    }
}

const configur = () => {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let adicaoBtn = document.getElementById('adicaoBtn');
    let subtracaoBtn = document.getElementById('subtracaoBtnBtn');
    let potenciaBtn = document.getElementById('potenciaBtn');
    let divisaoBtn = document.getElementById('divisaoBtn');
    let radiciacaoBtn = document.getElementById('radiciacaoBtn');
    let multiplicacaoBtn = document.getElementById('multiplicacaoBtn');

   

    //prettier-ignore
    if((adicaoBtn instanceof HTMLButtonElement) && (multiplicacaoBtn instanceof HTMLButtonElement)
        && (divisaoBtn instanceof HTMLButtonElement) && (subtracaoBtn instanceof HTMLInputElement) 
    && (potenciaBtn instanceof HTMLInputElement) && (radiciacaoBtn instanceof HTMLInputElement)){
        adicaoBtn.addEventListener("click", () => {
           calcular(num1, num2);
        });
       multiplicacaoBtn.addEventListener("click", () => {
            calcular(num1, num2);
         });
        potenciaBtn.addEventListener("click", () => {
            calcular(num1, num2);
         });
        radiciacaoBtn.addEventListener("click", () => {
            calcular(num1, num2);
         });
        subtracaoBtn.addEventListener("click", () => {
            calcular(num1, num2);
         });
         subtracaoBtn.addEventListener("click", () => {
            calcular(num1, num2);
         });

    }
}

document.addEventListener('DOMContentLoaded', configur);