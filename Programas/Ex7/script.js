function exibirErro(mensagem){
    let saida = document.getElementById('saida');

    if (saida instanceof HTMLParagraphElement){ 
        saida.textContent = 'Erro: ' + mensagem;
    }
}

function exibirConteudo(multiplos){
    let saida = document.getElementById('saida');

    if (saida instanceof HTMLParagraphElement){ 
        saida.textContent = ;
    }
}
function cadastar(){
    
}



const configu = () => {
    let nome = document.getElementById('titulo');
    let genero = document.getElementById('genero');
    let ano = document.getElementById('ano');
    
    let cadastrarBtn = document.getElementById('cadastrarBtn');

    //prettier-ignore
    if((cadastrarBtn instanceof HTMLButtonElement) && (nome instanceof HTMLInputElement) 
    && (genero instanceof HTMLInputElement) && (ano instanceof HTMLInputElement) ){
        cadastrarBtn.addEventListener("click", () => {
           cadastar();
        });
    }
}

document.addEventListener('DOMContentLoaded', configu);