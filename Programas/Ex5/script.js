function exibirErro(mensagem){
    let saida = document.getElementById('saida');

    if (saida instanceof HTMLParagraphElement){ 
        saida.textContent = 'Erro: ' + mensagem;
    }
}

function exibirConteudo(produto, valorTotal){
    let saida = document.getElementById('saida');

    if (saida instanceof HTMLParagraphElement){ 
        saida.textContent = `Produto: ${produto} Valor Total : ${valorTotal}`
    }
}
function exibirProdutoSelecionado() {
    let selecao = document.getElementById('selecionaProduto');
   if (selecao instanceof HTMLSelectElement) {
    let i = selecao.selectedIndex;
    let produtoSelecionado = selecao.options[i].value;
    return produtoSelecionado;
}
}


function calcular(){
    let quantidade = document.getElementById('quantidade');
    let preco = document.getElementById('preco');
    if((preco instanceof HTMLInputElement) 
        && (quantidade instanceof HTMLInputElement)){
            let quant = Number(quantidade.value);
            let prec = Number(preco.value);

            try{
                if(quant == null || prec == null){
                    throw new Error('Valores Nulos!.');
                }
                let valorTotal;
                valorTotal = quant * prec;
                let produto = exibirProdutoSelecionado();
                exibirConteudo(produto, valorTotal);
                
                } catch(error){
                    exibirErro(error.message);
                }  
    }
    }


const configurar = () => {
    let quantidade = document.getElementById('quantidade');
    let preco = document.getElementById('preco');
    let calcularBtn = document.getElementById('calcularBtn');

    //prettier-ignore
    if((calcularBtn instanceof HTMLButtonElement) && (preco instanceof HTMLInputElement) 
    && (quantidade instanceof HTMLInputElement)){
        calcularBtn.addEventListener("click", () => {
           calcular();
        });
    }
}

document.addEventListener('DOMContentLoaded', configurar);